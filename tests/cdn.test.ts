import "dotenv/config";
import { CDN } from "../src/cdn";

const accessKeyId = process.env.ALIYUN_ACCESS_KEY_ID;
const accessKeySecret = process.env.ALIYUN_ACCESS_KEY_SECRET;

if (!accessKeyId || !accessKeySecret) {
  throw new Error("Please config access key in dotenv file.");
}

const cdn = new CDN({
  accessKeyId,
  accessKeySecret,
});

(async () => {
  const res = await cdn.refreshFile("a url");
  console.log(res.data);
})();
