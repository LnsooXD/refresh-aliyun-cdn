"use strict";
const cutils = loadLib('cutils');
exports = module.exports = loadLib('./base');

exports.fn.refreshFile = function *(url) {
	return yield refreshObjectCaches(this.client, exports.TYPE_FILE, url);
};

exports.fn.refreshDir = function *(url) {
	return yield refreshObjectCaches(this.client, exports.TYPE_DIRECOTRY, url);
};

exports.fn.refreshFiles = function *(urls) {
	yield cutils.every(urls, function*(i, url) {
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
