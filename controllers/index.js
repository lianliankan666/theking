// index.js 和 routes/index.js是对应的

// 定义对象
var index = {};

var userModel = require('../models/userModel');
var uimanyModel = require('../models/uimanyModel');
var cryptoStr = require('../config/crypto_config');
var uploadFile = require("../config/uploadFile_config");

// 检测用户名的方法
index.checkUser = function(req, res){
 	// 检测
 	// console.log('数据已经收到了');

 	/*
 		获取传递的参数
 			req 	request 请求
 			以GET方式发送的数据，使用 req.query进行接收
	*/ 
 	// console.log(req.query);

	// 检测用户名是否为空
 	var uname = req.query.uname.trim();
 	if (uname === '') {
 		// 发送响应
 		res.send('isNull')

 		// 终止程序
		return;
 	}


 	// 条件
 	var con = {
 		uname: req.query.uname.trim()
 	}

 	// 将用户提交过来的数据，与数据库中现有的数据进行数据比对
 	userModel.findOne(con, function(err, data){
 		// console.log(err);
 		// console.log(data);
 		if (!err && data) {
			// 说明账户已经存在了
 			res.send('used');
 		} else {
 			// 该账户不存在，可用！
 			res.send('ok');
 		}
 	})
}

// 处理用户注册的数据
index.doReg = function(req, res) {
	/*
		获取参数
			使用req.body获取post方式提交的数据

	*/ 
	// console.log(req.body);

	// 参数
	var user = {
		uname: req.body.uname.trim(),
		shoujihao: req.body.shoujihao,
		upwd: cryptoStr(req.body.upwd)		
	}

	// 创建数据
	userModel.create(user, function(err, data) {
		// console.log(err);
		// console.log(data);
		if (!err && data){
			// 注册成功，跳转首页
			res.redirect('/');
		} else {
			// 跳转回注册页面
			res.redirect('back')
		}
	})
}



// 定义首页方法
index.index = function(req,res ) {
	/*
		req 请求
		res 响应
	*/ 
	// 响应模板
	// console.log(req.session);
	 if(req.session.user){

       user = req.session.user;

          console.log('用户登录了。。')
    }else{

         console.log('用户没有登录')
    }

	res.render('index')
}

// 登录
index.doLogin = function(req, res) {
	// console.log(req.body);
	var con = {
		uname: req.body.uname.trim(),
		upwd: cryptoStr(req.body.upwd)
	};

	// 查询数据库
	userModel.findOne(con, {}, function(err, data) {
		// console.log(err, data)
		if (!err && data) {
			// 账户和密码正确,将信息存储到session中
			req.session.user = data

			// 跳转首页
			res.redirect('/');
		} else {
			// 传递一次性的消息
			req.flash('loginError','账户或密码错误....');
			// 账户或密码错误
			res.redirect('back');
		}
	}) 
}

// 退出
index.logout = function(req, res) {
	// 销毁session --- 指定的session.user
	req.session.user = null;	// undefined

	// 跳转
	res.redirect('/');
}

index.denglu = function(req,res){
	res.render('denglu')
}

index.reg = function(req,res){
	res.render('reg')
}
index.likecourse = function(req,res){
	res.render('likecourse')
}
index.shaixuan = function(req,res){
	res.render('shaixuan')
}


// 文章模块
index.wenzhang = function(req,res){
	// res.render('wenzhang')
	uimanyModel.find({}, {title:1,content:1}).populate('user', {uname:1}).exec(function(err, data) {
			console.log(err, data)
			if (!err && data) {	
				// 响应页面
				res.render('wenzhang', {data: data});
			}
		})
}



index.homepage = function(req,res){
    
	res.render('homepage')
}
index.huodong = function(req,res){

	res.render('huodong')
}

//上传文件页面;
index.uploadFile = function(req,res){
	res.render("uploadFile")
}



// 向外导出
module.exports =index;