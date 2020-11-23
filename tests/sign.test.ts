import {signRequest} from '../src/util'

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

console.log(signRequest('GET', params, secret))

