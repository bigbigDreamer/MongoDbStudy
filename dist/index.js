"use strict";

var _mongoose = _interopRequireWildcard(require("mongoose"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

//1.连接制定数据库，如果没有会自动创建
_mongoose.default.connect('mongodb://localhost:27017/Person', {
  useNewUrlParser: true
}); //2.设计集合结构（表结构）
//字段名称就是表结构中的属性名称
//约束的目的是为了让数据保证其完整性，不会有脏数据


var PersonSchema = new _mongoose.Schema({
  //username为字符串类型，是必须的数据
  username: {
    type: String,
    required: true
  },
  //age为数字类型，可有可无
  age: {
    type: Number
  }
}); //3.将文档发布为模型
// mongoose.model方法就是用来将一个架构发布为Model
// 第一个参数：传入一个大写名词单数字符串用来表示你的数据库名称
// mongoose会自动将大写名词的字符串生成小写复数的集合，
//例如：如果是User就会转成users
//第二个参数：架构Schema
//返回值：返回模型构造函数

var User = _mongoose.default.model('User', PersonSchema); //
// //4.当我们有了模型构造函数之后，就可以使用这个构造函数对users表中的数据为所欲为了
//
// //*********************新增数据


var admin = new User({
  username: '王彬彬',
  age: 21
});
admin.save().then(function () {
  console.log('保存成功');
}).catch(function (err) {
  console.log("保存失败");
}); //*********************查询数据

User.find({
  username: '王彬彬',
  age: 21
}, function (err, arr) {
  console.log(arr[0]._id);
}); //打印查询数据
//# sourceMappingURL=index.js.map