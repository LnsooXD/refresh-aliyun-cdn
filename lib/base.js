/*!
 * refresh-aliyun-cdn - lib/base.js
 * Copyright(c) 2016 LnsooXD <LnsooXD@gmail.com>
 * MIT Licensed
 */

"use strict";
var libConfig = require('./config.json');
var util = require('./util');

exports = module.exports = function create() {
    return util.defineClass({
        config: {},
        baseUrl: null,
        init: function (config) {
            this.config = config;
            var endpoint = config['endpoint'];
            if (endpoint) {
                this.baseUrl = endpoint;
                if (endpoint.charAt(endpoint.length - 1) != '/') {
                    this.baseUrl = this.baseUrl + '/';
                }
            } else {
                this.baseUrl = libConfig['baseUrl'];
            }
        },
        _getUrl: function (path, type) {
            var params = {
                Format: libConfig['format'],
                SignatureMethod: libConfig['signatureMethod'],
                SignatureVersion: libConfig['signatureVersion'],
                Version: libConfig['apiVersion'],
                TimeStamp: util.timestamp(),
                AccessKeyId: this.config['accessKeyId'],
                SignatureNonce: util.signatureNonce(),
                Action: 'RefreshObjectCaches',
                ObjectPath: path,
                ObjectType: type
            };

            params.Signature = util.getSignature('GET', params, this.config['secretAccessKey']);
            return this.baseUrl + '?' + util.queryParamsToString(params);
        }
    });
};
