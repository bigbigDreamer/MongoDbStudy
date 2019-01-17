"use strict";

var _mongoose = _interopRequireWildcard(require("mongoose"));

var _Schema = _interopRequireDefault(require("./Schema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

//1.连接制定数据库，如果没有会自动创建
_mongoose.default.connect('mongodb://localhost:27017/Person', {
  useNewUrlParser: true
}); //2.设计集合结构（表结构）
//字段名称就是表结构中的属性名称
//约束的目的是为了让数据保证其完整性，不会有脏数据


var PersonSchema = new _mongoose.Schema(_Schema.default.Person); //3.将文档发布为模型
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
// const admin = new User({
//     username: '王彬彬',
//     age:21,
// });
//
// admin.save().then(() => {
//     console.log('保存成功');
// }).catch(err =>{
//      console.log("保存失败");
// });
//*********************查询数据


User.find({
  username: '王彬彬'
}, function (err, arr) {
  console.log(arr);
}); //打印查询数据
//********************更新数据
// User.where({ username: '王彬彬' }).updateOne({ age: 28 },(err,data)=>{
//     console.log(data);
// })
//# sourceMappingURL=index.js.map