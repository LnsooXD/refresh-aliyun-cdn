/*!
 * refresh-aliyun-cdn - lib/base.js
 * Copyright(c) 2016 LnsooXD <LnsooXD@gmail.com>
 * MIT Licensed
 */
import { RefreshObjectType, RefreshResult } from "./defines";
import { AxiosInstance, AxiosResponse } from "axios";
export interface CDNConfig {
    accessKeyId: string;
    accessKeySecret: string;
    endpoint?: string;
    client?: AxiosInstance;
}
export declare class CDN {
    private config;
    private baseUrl;
    private client;
    constructor(config: CDNConfig);
    refreshFile(url: string): Promise<AxiosResponse<RefreshResult, any>>;
    refreshDir(url: string): Promise<AxiosResponse<RefreshResult, any>>;
    refreshFiles(urls: string[]): Promise<AxiosResponse<RefreshResult, any>[]>;
    request(url: string, type: RefreshObjectType): Promise<AxiosResponse<RefreshResult, any>>;
    private makeRefreshRequestParams;
}
