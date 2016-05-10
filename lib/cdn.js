"use strict";

const cutils = loadLib('cutils');
const async = loadLib('async');

exports = module.exports = loadLib('./base')();

exports.fn.refreshFile = function (url, callback) {
	this.client.refreshObjectCaches({
		ObjectType: exports.TYPE_FILE,
		ObjectPath: url
	}, callback);
};

exports.fn.refreshDir = function (url, callback) {
	this.client.refreshObjectCaches({
		ObjectType: exports.TYPE_DIRECOTRY,
		ObjectPath: url
	}, callback);
};

exports.fn.refreshFiles = function (urls, callback) {
	async.each(urls, (url, async_cb) => {
		this.refreshFile(url, async_cb);
	}, callback);
};

