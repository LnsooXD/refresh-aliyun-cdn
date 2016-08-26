"use strict";
const ALY = loadLib('aliyun-sdk');

const TYPE_FILE = 'File';
const TYPE_DIRECOTRY = 'Direcotry';

exports = module.exports = function create() {
  let clazz = cutils.class({
    init: function (config) {
      this.client = new ALY.CDN(config);
    }
  });

  readonlyProp(clazz, 'TYPE_FILE', TYPE_FILE);
  readonlyProp(clazz, 'TYPE_DIRECOTRY', TYPE_DIRECOTRY);

  return clazz;
};

readonlyProp(exports, 'TYPE_FILE', TYPE_FILE);
readonlyProp(exports, 'TYPE_DIRECOTRY', TYPE_DIRECOTRY);

function readonlyProp(obj, key, value) {
  Object.defineProperty(obj, key, {
    value: value,
    writable: false
  });
}
