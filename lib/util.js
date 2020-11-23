"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signRequest = void 0;
const crypto_1 = require("crypto");
const escape = (str) => {
    return encodeURIComponent(str).replace(/\*/g, "%2A");
};
const signRequest = (method, params, secret) => {
    const canoQuery = Object.keys(params)
        .sort()
        .map((key) => {
        return escape(key) + "=" + escape(params[key]);
    })
        .join("&");
    const stringToSign = method.toUpperCase() + "&" + escape("/") + "&" + escape(canoQuery);
    return crypto_1.createHmac("sha1", secret + "&")
        .update(stringToSign)
        .digest("base64");
};
exports.signRequest = signRequest;
//# sourceMappingURL=util.js.map