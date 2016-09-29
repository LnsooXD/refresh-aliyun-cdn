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
    "endpoint": "https://cdn.aliyuncs.com"
});
```
* ES5 Generator one
```js
const cdn = new (loadLib('iooly-aliyun-cdn').co)({
    "accessKeyId": "xxxxxxx",
    "secretAccessKey": "xxxxxxxxxxxxxx",
    "endpoint": "https://cdn.aliyuncs.com"
});
```

###2. config

Just find accessKeyId, secretAccessKey and endpoint in [aliyun-sdk]

###3. refresh object

* refresh file
```js
// common one
cdn.refreshFile('http://sss/xxx/ss.jpg', function(err, result){

});

// ES5 Generator one
let result = yield cdn.refreshFile('http://sss/xxx/ss.jpg');
```
* refresh directory
```js
cdn.refreshDir('http://sss/xxx/', function(err, result){

});

// ES5 Generator one
let result = yield cdn.refreshDir('http://sss/xxx/');
```

##Installation
```shell
$ npm i -S refresh-aliyun-cdn
```

##Dependencies

* [async]
* [copy-to]
* [ctrl-it]
* [d3-time-format]
* [is-type-of]
* [platform]
* [urllib]

##Authors

- [LnsooXD](https://github.com/LnsooXD)

## License

- [MIT](http://spdx.org/licenses/MIT)


[async]: https://github.com/caolan/async
[copy-to]: https://github.com/node-modules/copy-to
[ctrl-it]: https://github.com/LnsooXD/ctrl-it
[d3-time-format]: https://github.com/d3/d3-time-format
[is-type-of]: https://github.com/node-modules/is-type-of
[platform]: https://github.com/bestiejs/platform.js
[urllib]: https://github.com/node-modules/urllib
[aliyun-sdk]: https://github.com/aliyun-UED/aliyun-sdk-js
