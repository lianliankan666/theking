// index.js 和 routes/index.js是对应的

// 定义对象
var create = {};

var userModel = require('../models/userModel');
var uimanyModel = require('../models/uimanyModel');
var cryptoStr = require('../config/crypto_config');

create.fabu = function(req, res) {
	// console.log(req.body)
	res.render('fabu');
}


create.docreate = function(req, res) {
	// console.log(req.body)
	// 获取数据
	var zuopinData = {
		title: req.body.title,
		content: req.body.content,
		// 谁发表的话题 -- 当前的登录对象 
		user: req.session.user._id,
	}
	// console.log(zuopinData)
	uimanyModel.create(zuopinData, function(err, data) {
		// console.log(err, data)
		if (!err && data) {
			// 创建成功，增加用户的积分(发表文章+5)，跳转话题详情页
			// console.log(req.session.user._id)
			var con = {
				_id: req.session.user._id
			};

			// 更新 $inc
			userModel.update(con, {$inc:{jifen:5,zuopin:1}}, function(err) {
				// 更新当前的session
				req.session.user.jifen += 5;
				req.session.user.zuopin += 1;

				// console.log(err)
				res.redirect('/homepage');
			})
		} else {
			// 跳回去
			res.redirect('back');
		}
	})

}


// 向外导出
module.exports = create;
