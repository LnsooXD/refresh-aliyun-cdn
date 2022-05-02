import 'dotenv/config'
import { CDN } from "../src/cdn";

const accessKeyId = process.env.ALIYUN_ACCESS_KEY_ID;
const accessKeySecret = process.env.ALIYUN_ACCESS_KEY_SECRET;
const urlToBeRefreshed = process.env.URL_TO_BE_REFRESHED;

if (!accessKeyId || !accessKeySecret) {
  throw new Error("Please config access key in dotenv file.");
}

const cdn = new CDN({
  accessKeyId,
  accessKeySecret,
});

(async () => {
  const res = await cdn.refreshDir(urlToBeRefreshed);
  console.log(res.data);
})().catch(e => console.error(e + ""));
