"use strict";
if (typeof loadLib === 'undefined') {
	require('iooly-cornerstone');
}

exports = module.exports = loadLib('./lib/cdn');
exports.co = loadLib('./lib/co-cdn');
