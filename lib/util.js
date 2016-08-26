/*!
 * refresh-aliyun-cdn - lib/util.js
 * Copyright(c) 2016 LnsooXD <LnsooXD@gmail.com>
 * MIT Licensed
 */
"use strict";
var it = require('ctrl-it');
var is = require('is-type-of');

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
        it.each(_extends, function(k, v) {
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