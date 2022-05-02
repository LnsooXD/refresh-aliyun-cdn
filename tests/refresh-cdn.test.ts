import "dotenv/config";
import { CDN } from "../src/cdn";

let cdn: CDN;

beforeEach(() => {
  const accessKeyId = process.env.ALIYUN_ACCESS_KEY_ID;
  const accessKeySecret = process.env.ALIYUN_ACCESS_KEY_SECRET;
  if (!accessKeyId || !accessKeySecret) {
    throw new Error("Please config access key in dotenv file.");
  }

  cdn = new CDN({
    accessKeyId,
    accessKeySecret,
  });
});

test("test refresh dir", async () => {
  const dirToBeRefreshed = process.env.DIR_TO_BE_REFRESHED;
  const res = await cdn.refreshDir(dirToBeRefreshed);

  const {RequestId, RefreshTaskId} = res.data;

  expect(!!RequestId).toBeTruthy();
  expect(!!RefreshTaskId).toBeTruthy();
});

test("test refresh file", async () => {
  const fileToBeRefreshed = process.env.FILE_TO_BE_REFRESHED_0;
  const res = await cdn.refreshFile(fileToBeRefreshed);

  const {RequestId, RefreshTaskId} = res.data;

  expect(!!RequestId).toBeTruthy();
  expect(!!RefreshTaskId).toBeTruthy();
});

test("test refresh multi files", async () => {
  const filesToBeRefreshed = [
    process.env.FILE_TO_BE_REFRESHED_0,
    process.env.FILE_TO_BE_REFRESHED_1
  ];
  const responses = await cdn.refreshFiles(filesToBeRefreshed);

  for (let res of responses) {
    const {RequestId, RefreshTaskId} = res.data;
    expect(!!RequestId).toBeTruthy();
    expect(!!RefreshTaskId).toBeTruthy();
  }
});
