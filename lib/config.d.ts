import { RequestFormat } from "./defines";
export interface DefaultConfig {
    baseUrl: string;
    apiVersion: string;
    format: RequestFormat;
    signatureVersion: string;
    signatureMethod: string;
}
declare const config: DefaultConfig;
export default config;
