export declare type RefreshObjectType = "File" | "Directory";
export declare type ActionType = "RefreshObjectCaches";
export declare type RequestFormat = "JSON" | "XML";
export interface BaseRequestParams {
    Action: ActionType;
    Version: string;
    SignatureMethod: string;
    SignatureVersion: string;
    SignatureNonce: string;
    Signature?: string;
    Format: RequestFormat;
    AccessKeyId: string;
    Timestamp: string;
}
export interface RefreshRequestParams extends BaseRequestParams {
    Action: "RefreshObjectCaches";
    ObjectPath: string;
    ObjectType: RefreshObjectType;
}
export interface RefreshResult {
    RequestId: string;
    RefreshTaskId: string;
}
