/*!
 * refresh-aliyun-cdn - lib/cdn.js
 * Copyright(c) 2016 LnsooXD <LnsooXD@gmail.com>
 * MIT Licensed
 */

"use strict";
var async = require('async');
var urllib = require('urllib');
var util = require('./util');
var types = require('./config.json').types;

exports = module.exports = (require('./base'))();

exports.fn.refreshFile = function (url, callback) {
    request(this, url, types['file'], callback);
};

exports.fn.refreshDir = function (url, callback) {
    request(this, url, types['dir'], callback);
};

exports.fn.refreshFiles = function (urls, callback) {
    async.each(urls, (url, async_cb) => {
        this.refreshFile(url, async_cb);
    }, callback);
};

function request(client, url, type, callback) {
    var requestUrl = client._getUrl(url, type);
    urllib.request(requestUrl, {
        method: 'GET',
        headers: util.getHeaders(),
    }, function (err, data, res) {
        var result = {
            data: JSON.parse(data.toString()),
            res: res
        };
        callback(err, result);
    });
}

