"use strict";
const ALY = loadLib('aliyun-sdk');
const cutils = loadLib('cutils');

const TYPE_FILE = 'File';
const TYPE_DIRECOTRY = 'Direcotry';

exports = module.exports = function create() {
  let clazz = cutils.class({
    init: function (ossConfig) {
      this.client = new ALY.CDN(ossConfig);
    }
  });

  cutils.readonlyProp(clazz, 'TYPE_FILE', TYPE_FILE);
  cutils.readonlyProp(clazz, 'TYPE_DIRECOTRY', TYPE_DIRECOTRY);

  return clazz;
};

cutils.readonlyProp(exports, 'TYPE_FILE', TYPE_FILE);
cutils.readonlyProp(exports, 'TYPE_DIRECOTRY', TYPE_DIRECOTRY);
