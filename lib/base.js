/*!
 * refresh-aliyun-cdn - lib/base.js
 * Copyright(c) 2016 LnsooXD <LnsooXD@gmail.com>
 * MIT Licensed
 */

"use strict";
var ALY = require('aliyun-sdk');
var util = require('./util');

var TYPE_FILE = 'File';
var TYPE_DIRECTORY = 'Directory';

exports = module.exports = function create() {
  var clazz = util.defineClass({
    init: function (config) {
      this.client = new ALY.CDN(config);
    }
  });

  util.readonlyProp(clazz, 'TYPE_FILE', TYPE_FILE);
  util.readonlyProp(clazz, 'TYPE_DIRECTORY', TYPE_DIRECTORY);

  return clazz;
};

util.readonlyProp(exports, 'TYPE_FILE', TYPE_FILE);
util.readonlyProp(exports, 'TYPE_DIRECTORY', TYPE_DIRECTORY);
