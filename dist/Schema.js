"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @time  2019/1/17 0:54
 * @author  Bill Wang <vuejs@vip.qq.com>
 * @desc  存放每张数据表的Schema
 */
var _default = {
  Person: {
    //username为字符串类型，是必须的数据
    username: {
      type: String,
      required: true
    },
    //age为数字类型，可有可无
    age: {
      type: Number
    }
  }
};
exports.default = _default;
//# sourceMappingURL=Schema.js.map