// 针对数据库中集合user的模型

// 引入模块
var mongoose = require('../config/db_config')

// 创建骨架 Schema
var userSchema = new mongoose.Schema({
	// uname 相当于字段 
	uname: {
		// 数据类型
		type: String,

		// 唯一性数据
		unique: true
	},

	// 手机号字段
	shoujihao: {
		type: Number,
		// default: ''
	},

	// 密码字段
	upwd: {
		type: String,
		// default: ''
	},
	// 作品 相当于字段 
	zuopin: {
		// 数据类型
		type: Number,

		// 唯一性数据
		default: 0
	},

	// 粉丝字段
	fensi: {
		// 数据类型
		type: Number,

		// 唯一性数据
		default: 0
	},

	// 关注字段
	guanzhu: {
		// 数据类型
		type: Number,

		// 唯一性数据
		default: 0
	},

	// 积分字段
	jifen: {
		// 数据类型
		type: Number,

		// 唯一性数据
		default: 0
	},

	// 分享字段
	fenxiang: {
		// 数据类型
		type: Object,

		// 唯一性数据
		default: {}
	},

	// 评论字段
	pinglun: {
		// 数据类型
		type: String,

		// 唯一性数据
		// default: 0
	},

	// 点赞字段
	dianzan: {
		// 数据类型
		type: Number,

		// 唯一性数据
		default: 0
	},
	qianming: {
		type: String,
		default:'这个家伙很懒，什么都没有留下'
	}

});

// 创建模型
// 相当于以stuSchema为原型，创建集合user
var userModel = mongoose.model('users', userSchema);

// 操作
// console.log(stuModel);


// 定义数据
// var user = {
// 	uname: '王母',
// 	shoujihao: 12000000000,
// 	upwd: '123' 
// }

// // 插入一条数据
// userModel.create(user, function(err, data) {
// 	console.log(err);
// 	console.log(data);
// })


// 将模型向外暴露
module.exports = userModel;