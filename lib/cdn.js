/*!
 * refresh-aliyun-cdn - lib/cdn.js
 * Copyright(c) 2016 LnsooXD <LnsooXD@gmail.com>
 * MIT Licensed
 */

"use strict";
const async = require('async');

exports = module.exports = require('./base')();

exports.fn.refreshFile = function (url, callback) {
	this.client.refreshObjectCaches({
		ObjectType: exports.TYPE_FILE,
		ObjectPath: url
	}, callback);
};

exports.fn.refreshDir = function (url, callback) {
	this.client.refreshObjectCaches({
		ObjectType: exports.TYPE_DIRECTORY,
		ObjectPath: url
	}, callback);
};

exports.fn.refreshFiles = function (urls, callback) {
	async.each(urls, (url, async_cb) => {
		this.refreshFile(url, async_cb);
	}, callback);
};

