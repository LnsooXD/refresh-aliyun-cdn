/*!
 * refresh-aliyun-cdn - refresh-aliyun-cdn.js
 * Copyright(c) 2016 LnsooXD <LnsooXD@gmail.com>
 * MIT Licensed
 */

"use strict";
if (typeof loadLib === 'undefined') {
	require('iooly-cornerstone');
}

exports = module.exports = loadLib('./lib/cdn');
exports.co = loadLib('./lib/co-cdn');
