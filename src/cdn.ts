/*!
 * refresh-aliyun-cdn - lib/base.js
 * Copyright(c) 2016 LnsooXD <LnsooXD@gmail.com>
 * MIT Licensed
 */

"use strict";

import libConfig from "./config";
import { timeFromat } from "./time-fromat";
import { v4 as signatureNonce } from "uuid";
import {
  RefreshRequestParams,
  RefreshObjectType,
  RefreshResult,
} from "./defines";
import Axios, { AxiosInstance, AxiosResponse } from "axios";
import { signRequest } from "./util";

export interface CDNConfig {
  accessKeyId: string;
  accessKeySecret: string;
  endpoint?: string;
  client?: AxiosInstance;
}

export class CDN {
  private config: CDNConfig;
  private baseUrl: string;
  private client: AxiosInstance;

  constructor(config: CDNConfig) {
    this.config = Object.assign({}, config);
    this.client = config.client || Axios;
    const endpoint = config.endpoint;
    if (endpoint) {
      this.baseUrl = endpoint;
      if (endpoint.charAt(endpoint.length - 1) != "/") {
        this.baseUrl = this.baseUrl + "/";
      }
    } else {
      this.baseUrl = libConfig["baseUrl"];
    }
  }

  refreshFile(url: string) {
    return this.request(url, "File");
  }

  refreshDir(url: string) {
    return this.request(url, "Directory");
  }

  refreshFiles(urls: string[]) {
    return Promise.all(urls.map((url) => this.refreshFile(url)));
  }

  async request(
    url: string,
    type: RefreshObjectType
  ): Promise<AxiosResponse<RefreshResult, any>> {
    const params = this.makeRefreshRequestParams(url, type);
    const result = await this.client.get(this.baseUrl, { params: params });
    if (result.data && typeof result.data === "string") {
      result.data = JSON.parse(result.data);
    }
    return result;
  }

  private makeRefreshRequestParams(
    path: string,
    type: RefreshObjectType
  ): RefreshRequestParams {
    const params: RefreshRequestParams = {
      Format: "JSON",
      SignatureMethod: libConfig.signatureMethod,
      SignatureVersion: libConfig.signatureVersion,
      Version: libConfig.apiVersion,
      Timestamp: timeFromat(new Date()),
      AccessKeyId: this.config.accessKeyId,
      SignatureNonce: signatureNonce(),
      Action: "RefreshObjectCaches",
      ObjectPath: path,
      ObjectType: type,
    };

    params.Signature = signRequest(
      "GET",
      params as any,
      this.config.accessKeySecret || (this.config as any).secretAccessKey
    );
    return params;
  }
}
