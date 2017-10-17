// 检测用户是否登录的中间件
module.exports = function(req, res, next) {
	// 判断是否登录
	if (!req.session.user) {
		// 跳转登录页
		res.redirect('/denglu');

		// 终止
		return;
	}

	// 移交权限
	next();
}