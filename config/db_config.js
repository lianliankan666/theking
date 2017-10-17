// 数据库的配置文件

// 引入模块
var mongoose = require('mongoose');

// 定义数据库连接地址
var dbUrl = 'mongodb://data:data@192.168.31.99:27017/data';

// 建立连接
mongoose.connect(dbUrl, {
	useMongoClient: true
}, function(err) {
	// console.log(err);

	// 判断是否连接成功
	if (err){
		console.log('数据库连接失败了...');
		// 终止程序
		return;
	}
})

// 将当前的mongoose对象，向外暴露
module.exports = mongoose;