export type RefreshObjectType = "File" | "Directory";
export type ActionType = "RefreshObjectCaches";
export type RequestFormat = "JSON" | "XML";

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
  