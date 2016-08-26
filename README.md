# refresh-aliyun-cdn
simplify aliyun-sdk for refreshing aliyun CDN

## Features
###1. Refresh Aliyun CDN file, files and dir simply.
* cdn.refreshDir(http://xx.xx.xx/img/);
* cdn.refreshFile(http://xx.xx.xx/img/1.png);
* cdn.refreshFiles([http://xx.xx.xx/img/1.png, http://xx.xx.xx/img/2.png, ...]);

###2. ES5 Generator Support
* yield cdn.refreshDir(http://xx.xx.xx/img/);
* yield cdn.refreshFile(http://xx.xx.xx/img/1.png);
* yield cdn.refreshFiles([http://xx.xx.xx/img/1.png, http://xx.xx.xx/img/2.png, ...]);

##Guide
###1. Get the cdn instance
* common one:
```js
const cdn = new (loadLib('iooly-aliyun-cdn'))({
    "accessKeyId": "xxxxxxx",
    "secretAccessKey": "xxxxxxxxxxxxxx",
    "endpoint": "https://cdn.aliyuncs.com",
    "apiVersion": "2014-11-11"
});
```
* ES5 Generator one
```js
const cdn = new (loadLib('iooly-aliyun-cdn').co)({
    "accessKeyId": "xxxxxxx",
    "secretAccessKey": "xxxxxxxxxxxxxx",
    "endpoint": "https://cdn.aliyuncs.com",
    "apiVersion": "2014-11-11"
});
```

###2. config
Just find accessKeyId, secretAccessKey, endpoint and apiVersion in [aliyun-sdk]

##Installation
```shell
$ npm install refresh-aliyun-cdn --save
```

##Dependencies

- [aliyun-sdk]

##Authors

- [LnsooXD](https://github.com/LnsooXD)

## License

- [MIT](http://spdx.org/licenses/MIT)




[aliyun-sdk]: https://github.com/aliyun-UED/aliyun-sdk-js
