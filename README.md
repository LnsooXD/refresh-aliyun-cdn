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
const cdn = new (loadLib('iooly-aliyun-cdn'))({
    "accessKeyId": "xxxxxxx",
    "secretAccessKey": "xxxxxxxxxxxxxx",
    "endpoint": "https://cdn.aliyuncs.com"
});
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

## Dependencies

* [axios](https://github.com/axios/axios)

* [d3-time-format](https://github.com/d3/d3-time-format)

* [uuid](https://github.com/uuidjs/uuid)

## Authors

[LnsooXD](https://github.com/LnsooXD)

## License

[MIT](http://spdx.org/licenses/MIT)
