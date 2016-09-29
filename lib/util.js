/*!
 * refresh-aliyun-cdn - lib/util.js
 * Copyright(c) 2016 LnsooXD <LnsooXD@gmail.com>
 * MIT Licensed
 */
"use strict";
var it = require('ctrl-it');
var is = require('is-type-of');
var crypto = require('crypto');
var copy = require('copy-to');
var platform = require('platform');
var pkg = require('../package.json');
var d3 = require('d3-time-format');
var timeFromat = d3.utcFormat('%Y-%m-%dT%H:%M:%SZ');
var headDateFormat = d3.utcFormat('UTC:%a, %d %m Y %H:%M:%S \'GMT\'');

exports = module.exports;

exports.readonlyProp = function readonlyProp(obj, key, value) {
    Object.defineProperty(obj, key, {
        value: value,
        writable: false
    });
};

exports.defineClass = function defineClass(prototype /*, _extends */) {
    var _extends = [];

    var argc = arguments.length;
    if (argc > 1) {
        for (var i = 1; i < argc; i++) {
            _extends.push(arguments[i]);
        }
    }

    var clazz = function () {
        var obj = {__proto__: clazz.fn};
        it.each(_extends, function (k, v) {
            v.apply(obj, arguments);
        });
        clazz.fn.init.apply(obj, arguments);
        return obj;
    };

    clazz.fn = clazz.prototype = {};
    inherits(clazz, _extends);

    for (var key in prototype) {
        clazz.fn[key] = prototype[key];
    }

    clazz.fn.constructor = clazz;

    if (!is.function(clazz.fn.init)) {
        clazz.fn.init = function () {
        }
    }
    return clazz;
};

exports.timestamp = function () {
    return timeFromat(new Date());
};

exports.signatureNonce = function () {
    var value = Math.round(Math.random() * 10000000000);
    return value.toString(36);
};

exports.getSignature = function (method, params, key) {
    var canoQuery = Object.keys(params).sort().map(function (key) {
        return _escape(key) + '=' + _escape(params[key])
    }).join('&');

    var stringToSign =
        method.toUpperCase() +
        '&' + _escape('/') +
        '&' + _escape(canoQuery);

    var signature = crypto.createHmac('sha1', key + '&');
    signature = signature.update(stringToSign).digest('base64');
    return signature;
};

exports.queryParamsToString = function (params) {
    var items = [];
    var escape = uriEscape;
    var sortedKeys = Object.keys(params).sort();

    it.each(sortedKeys, function (i, name) {
        var value = params[name];
        var ename = escape(name);
        var result = ename;
        if (Array.isArray(value)) {
            var vals = [];
            it.each(value, function (item) {
                vals.push(escape(item));
            });
            result = ename + '=' + vals.sort().join('&' + ename + '=');
        } else if (value !== undefined && value !== null) {
            result = ename + '=' + escape(value);
        }
        items.push(result);
    });

    return items.join('&');
};

exports.getHeaders = function () {
    var ua = userAgent();
    return {
        'x-oss-date': headDateFormat(new Date()),
        'x-oss-user-agent': ua,
        'User-Agent': ua
    };
};

function inherits(sub, _extends) {
    var base;
    var len = _extends.length;
    for (var i = 0; i < len; i++) {
        base = __create__(_extends[i].prototype);
        for (var attr in base) {
            sub.prototype[attr] = base[attr];
        }
    }
    sub.prototype._extends = __copy_own_prop__(_extends);
    if (len > 0) {
        // just instanceof first _extends or will broke _extends's construct
        sub.prototype.__proto__ = _extends[0].prototype;
    }
    sub.prototype.instanceof = function (clazz) {
        var res = false;
        it.each(_extends, function (k, v) {
            if (is.function(v.prototype.instanceof)) {
                if (v.prototype.instanceof(clazz)) {
                    res = true;
                    return CTRL_BREAK;
                }
            } else {
                if (v === clazz) {
                    res = true;
                    return CTRL_BREAK;
                }
            }
            return CTRL_NORMAL;
        });
        return res;
    };
}

const __copy_own_prop__ = (obj)=> {
    let array = is.array(obj);
    let dst = array ? [] : {};
    if (array) {
        it.each(obj, function (k, v) {
            dst.push(v);
        });
    } else {
        it.each(obj, function (k, v) {
            dst[k] = v;
        });
    }
    return dst;
};

function __create__(obj) {
    var _create;
    if (!Object.create) {
        _create = function (obj) {
            function F() {
            }

            F.prototype = obj;
            return new F();
        };
    } else {
        _create = Object.create;
    }
    return _create(obj);
}

function _escape(str) {
    return encodeURIComponent(str).replace(/\*/g, '%2A');
}

function uriEscape(string) {
    /*jshint undef:false */
    var output = encodeURIComponent(string);
    // output = output.replace(/[^A-Za-z0-9_.~\-%]+/g, escape);

    // percent-encodes some extra non-standard characters in a URI
    output = output.replace(/[*]/g, function (ch) {
        return '%' + ch.charCodeAt(0).toString(16).toUpperCase();
    });

    return output;
}

function userAgent() {
    var agent = 'nodejs';
    var sdk = 'refresh-aliyun-cdn ' + agent + '/' + pkg.version;
    var plat = platform.description;

    return sdk + ' ' + plat;
}