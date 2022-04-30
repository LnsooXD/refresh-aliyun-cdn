/*!
 * refresh-aliyun-cdn - lib/base.js
 * Copyright(c) 2016 LnsooXD <LnsooXD@gmail.com>
 * MIT Licensed
 */
import { RefreshObjectType } from "./defines";
import { AxiosInstance } from "axios";
export interface CDNConfig {
    accessKeyId: string;
    secretAccessKey: string;
    endpoint?: string;
    client?: AxiosInstance;
}
export declare class CDN {
    private config;
    private baseUrl;
    private client;
    constructor(config: CDNConfig);
    refreshFile(url: string): Promise<import("axios").AxiosResponse<any, any>>;
    refreshDir(url: string): Promise<import("axios").AxiosResponse<any, any>>;
    refreshFiles(urls: string[]): Promise<import("axios").AxiosResponse<any, any>[]>;
    request(url: string, type: RefreshObjectType): Promise<import("axios").AxiosResponse<any, any>>;
    private makeRefreshRequestParams;
}
