/*!
 * refresh-aliyun-cdn - lib/co-cdn.js
 * Copyright(c) 2016 LnsooXD <LnsooXD@gmail.com>
 * MIT Licensed
 */

"use strict";
var it = require('ctrl-it');
exports = module.exports = require('./base')();

exports.fn.refreshFile = function *(url) {
	return yield refreshObjectCaches(this.client, exports.TYPE_FILE, url);
};

exports.fn.refreshDir = function *(url) {
	return yield refreshObjectCaches(this.client, exports.TYPE_DIRECTORY, url);
};

exports.fn.refreshFiles = function *(urls) {
	yield it.every(urls, function*(i, url) {
		yield this.refreshFile(url);
	});
};

function refreshObjectCaches(client, type, url) {
	return done=> {
		client.refreshObjectCaches({
			ObjectType: type,
			ObjectPath: url
		}, done);
	}
}
