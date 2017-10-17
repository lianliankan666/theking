// 针对数据库中集合user的模型

// 引入模块
var mongoose = require('../config/db_config')

// 创建骨架 Schema
var uimanySchema = new mongoose.Schema({
	// 作品 相当于字段 
	zuopin: {
		// 数据类型
		type: Number,

		// 唯一性数据
		default: 0
	},
	user: {
		type: 'ObjectId',
		ref: 'users'
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
		default: ''
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

	title :{
		type:String
	},

	content:{
		type:String
	}
});

// 创建模型
// 相当于以Schema为原型，创建集合user
var uimanyModel = mongoose.model('uimany', uimanySchema);

// 操作
// console.log(stuModel);


// var shejishi = {
// 	// 作品 相当于字段 
// 	zuopin: 9,

// 	// 粉丝字段
// 	fensi: 999,

// 	// 关注字段
// 	guanzhu:8888,

// 	// 积分字段
// 	jifen: 1314,


// 	// 评论字段
// 	pinglun:'顶一下',

// 	// 点赞字段
// 	点赞: 999
// }

// // // 插入一条数据
// uimanyModel.create(shejishi, function(err, data) {
// 	console.log(err);
// 	console.log(data);
// })


// 将模型向外暴露
module.exports = uimanyModel;