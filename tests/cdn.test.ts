import { CDN } from "../src/cdn";

const cdn = new CDN({
  accessKeyId: "a key",
  secretAccessKey: "a secret",
});

(async () => {
  const res = await cdn.refreshFile("a url");
  console.log(res.data);
})();
