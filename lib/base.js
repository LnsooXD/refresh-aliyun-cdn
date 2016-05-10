"use strict";
const ALY = loadLib('aliyun-sdk');
const cutils = loadLib('cutils');

exports = module.exports = function create() {
  return cutils.class({
    init: function (ossConfig) {
      this.client = new ALY.CDN(ossConfig);
    }
  });
};

cutils.readonlyProp(exports, 'TYPE_FILE', 'File');
cutils.readonlyProp(exports, 'TYPE_DIRECOTRY', 'Direcotry');
