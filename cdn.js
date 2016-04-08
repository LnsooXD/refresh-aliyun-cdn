"use strict";
if (typeof loadLib === 'undefined') {
	require('iooly-cornerstone');
}

const ALY = loadLib('aliyun-sdk');
const config = loadLib('config');
const async = loadLib('async');
const cutils = loadLib('cutils');
const EventEmitter = loadLib('events').EventEmitter;

exports = module.exports = utils.class({
	init: function (ossConfig) {
		this.client = ALY.CDN(ossConfig);
	}
}, EventEmitter);

exports.fn.refreshFile = function (url, callback) {
	this.client.refreshObjectCaches({
		ObjectType: 'File',
		ObjectPath: url
	}, callback);
};

exports.fn.refreshDir = function (url, callback) {
	this.client.refreshObjectCaches({
		ObjectType: 'Direcotry',
		ObjectPath: url
	}, callback);
};

exports.fn.refreshFiles = function (urls, callback) {
        var $this = this;
	async.each(urls, function (url, async_cb) {
		$this.refreshFile(url, async_cb);
	}, callback);
};
