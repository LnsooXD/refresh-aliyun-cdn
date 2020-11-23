/*!
 * refresh-aliyun-cdn - lib/base.js
 * Copyright(c) 2016 LnsooXD <LnsooXD@gmail.com>
 * MIT Licensed
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CDN = void 0;
const config_1 = require("./config");
const d3 = require("d3-time-format");
const uuid_1 = require("uuid");
const axios_1 = require("axios");
const util_1 = require("./util");
const timeFromat = d3.utcFormat("%Y-%m-%dT%H:%M:%SZ");
class CDN {
    constructor(config) {
        this.config = Object.assign({}, config);
        this.client = config.client || axios_1.default;
        const endpoint = config.endpoint;
        if (endpoint) {
            this.baseUrl = endpoint;
            if (endpoint.charAt(endpoint.length - 1) != "/") {
                this.baseUrl = this.baseUrl + "/";
            }
        }
        else {
            this.baseUrl = config_1.default["baseUrl"];
        }
    }
    refreshFile(url) {
        return this.request(url, "File");
    }
    refreshDir(url) {
        return this.request(url, "Directory");
    }
    refreshFiles(urls) {
        return Promise.all(urls.map((url) => this.refreshFile(url)));
    }
    async request(url, type) {
        const params = this.makeRefreshRequestParams(url, type);
        const result = await this.client.get(this.baseUrl, { params: params });
        console.log(result.data);
        if (result.data && typeof result.data === "string") {
            result.data = JSON.parse(result.data);
        }
        return result;
    }
    makeRefreshRequestParams(path, type) {
        const params = {
            Format: "JSON",
            SignatureMethod: config_1.default.signatureMethod,
            SignatureVersion: config_1.default.signatureVersion,
            Version: config_1.default.apiVersion,
            Timestamp: timeFromat(new Date()),
            AccessKeyId: this.config.accessKeyId,
            SignatureNonce: uuid_1.v4(),
            Action: "RefreshObjectCaches",
            ObjectPath: path,
            ObjectType: type,
        };
        params.Signature = util_1.signRequest("GET", params, this.config.secretAccessKey);
        return params;
    }
}
exports.CDN = CDN;
//# sourceMappingURL=cdn.js.map