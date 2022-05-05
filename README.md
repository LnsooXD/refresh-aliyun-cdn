# refresh-aliyun-cdn

simplify aliyun-sdk for refreshing aliyun CDN

## Features

> Refresh Aliyun CDN file, files and dir simply.

* await cdn.refreshDir('http://xx.xx.xx/img/');
* await cdn.refreshFile('http://xx.xx.xx/img/1.png');
* await cdn.refreshFiles(['http://xx.xx.xx/img/1.png', 'http://xx.xx.xx/img/2.png', ...]);

## Guide

### 1. Get the cdn instance

```js
import { CDN } from 'refresh-aliyun-cdn';

const cdn = new CDN({
  accessKeyId: "a key",
  accessKeySecret: "a secret"
});

(async () => {
  const res = await cdn.refreshFile("a url");
  const result:RefreshResult = res.data; 
  
  console.log(result);
})();

```

### 2. refresh object

* refresh single file

```js
const {data} = await cdn.refreshFile('http://sss/xxx/ss.jpg');
```

* refresh directory

```js
const {data} = await cdn.refreshDir('http://sss/xxx/';
```

* refresh multiple files

```js
const {data} = await cdn.refreshFiles([
    'http://sss/xxx/',
    'http://sss/yyy/',
    'http://sss/zzz/'
]);
```

## Installation

```shell
npm i -S refresh-aliyun-cdn
```

## Development & Testing

Clone this project:

```shell
git clone https://github.com/LnsooXD/refresh-aliyun-cdn
```

Create a `.env` file with contents like blew:

```ini
ALIYUN_ACCESS_KEY_ID="{your aliyun access key id}"
ALIYUN_ACCESS_KEY_SECRET="{your aliyun access key secret}"

DIR_TO_BE_REFRESHED="https://www.example.com/dir/to/be/refreshed/"

FILE_TO_BE_REFRESHED_0="https://www.example.com/file/0/to/be/refreshed/index.html"
FILE_TO_BE_REFRESHED_1="https://www.example.com/file/1/to/be/refreshed/index.js"

```

Run testing with Jest:

```shell
npm run test
```

## Dependencies

* [axios](https://github.com/axios/axios)

* [uuid](https://github.com/uuidjs/uuid)

## Development Dependencies

* [TypeScript](https://github.com/Microsoft/TypeScript)

* [ts-node](https://github.com/TypeStrong/ts-node)

* [jest](https://github.com/facebook/jest)

* [dotenv](https://github.com/motdotla/dotenv)

* [ts-jest](https://github.com/kulshekhar/ts-jest)

## Authors

[LnsooXD](https://github.com/LnsooXD)

## License

[MIT](http://spdx.org/licenses/MIT)
