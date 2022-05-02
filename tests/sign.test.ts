import { signRequest } from "../src/util";

test("test sign", () => {
  const secret = "testsecret";

  const params = {
    Action: "StartCdnDomain",
    DomainName: "example.com",
    Format: "XML",
    AccessKeyId: "testid",
    SignatureMethod: "HMAC-SHA1",
    SignatureNonce: "3ee8c1b8-83d3-44af-a94f-4e0ad82fd6cf",
    SignatureVersion: "1.0",
  };

  const sign = signRequest("GET", params, secret);
  expect(sign).toBe("IPEkZuTMcTLXs8b/Eu65qlhOZJI=");
});
