import { RequestFormat } from "./defines";

export interface DefaultConfig {
  baseUrl: string;
  apiVersion: string;
  format: RequestFormat;
  signatureVersion: string;
  signatureMethod: string;
}

const config: DefaultConfig = {
  baseUrl: "https://cdn.aliyuncs.com/",
  apiVersion: "2018-05-10",
  format: "JSON",
  signatureVersion: "1.0",
  signatureMethod: "HMAC-SHA1",
};

export default config;
