import { createHmac } from "crypto";

const escape = (str: string): string => {
  return encodeURIComponent(str).replace(/\*/g, "%2A");
};

export const signRequest = (
  method: string,
  params: { [key: string]: string },
  secret: string
): string => {
  const canoQuery = Object.keys(params)
    .sort()
    .map((key: string) => {
      return escape(key) + "=" + escape(params[key]);
    })
    .join("&");

  const stringToSign =
    method.toUpperCase() + "&" + escape("/") + "&" + escape(canoQuery);

  return createHmac("sha1", secret + "&")
    .update(stringToSign)
    .digest("base64");
};

