/*!
 * refresh-aliyun-cdn - lib/co-cdn.js
 * Copyright(c) 2016 LnsooXD <LnsooXD@gmail.com>
 * MIT Licensed
 */

"use strict";
var it = require('ctrl-it');
var urllib = require('urllib');
var util = require('./util');
var types = require('./config.json').types;

exports = module.exports = (require('./base'))();

exports.fn.refreshFile = function *(url) {
    return yield request(this, url, types['file']);
};

exports.fn.refreshDir = function *(url) {
    return yield request(this, url, types['dir']);
};

exports.fn.refreshFiles = function *(urls) {
    yield it.every(urls, function*(i, url) {
        yield this.refreshFile(url);
    });
};

function *request(client, url, type) {
    var requestUrl = client._getUrl(url, type);
    var result = yield urllib.requestThunk(requestUrl, {
        method: 'GET',
        headers: util.getHeaders(),
    });

    if (result.data) {
        result.data = JSON.parse(result.data.toString());
    }

    return result;
}
