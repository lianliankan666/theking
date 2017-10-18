var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// 引入session模块
var session = require('express-session');
var flash = require('connect-flash');

var checkUserLogin = require('./middlewares/checkUserLogin');


var index = require('./routes/index');
var users = require('./routes/users');
var create = require('./routes/create');


var video = require('./routes/video');
var ruanjian = require('./routes/ruanjian');
var shouce1 = require('./routes/shouce1');
var shouce2 = require('./routes/shouce2');
var Personal_Tailor = require('./routes/Personal_Tailor');
var study_manual = require('./routes/study_manual');
var check = require('./routes/check');
var training_battalion = require('./routes/training_battalion');
var guanzhu = require('./routes/guanzhu');


var dianzan = require('./routes/dianzan');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// 中间件 使用session (最好在cookie的后面使用session模块)
app.use(session({
	// 加密字符串
	secret: 'suibianxieshenmedouxing',
	// 当session没有变化时，是否进行初始化
	saveUninitialized: false,
	// 是否进行重新的存储
	resave: false,
	// rolling 滚动
	rolling: true,
	// 存储的有效期和生效的路径
	cookie: {
		maxAge: 1000*60*30,
		path: '/'
	}
}));

// 配置
app.use(flash())

app.use(express.static(path.join(__dirname, 'public')));


// 自定义中间件处理
app.use(function(req, res, next) {
	// console.log(222)

	// 全局的对象 res.locals 直接在视图中使用
	// console.log(res.locals)

	// res.locals.user 获取的是用户登录信息
	res.locals.user = req.session.user;

	// console.log(req.flash('loginError'));
	// 挂载错误信息
	res.locals.loginError = req.flash('loginError');

    res.locals.dianzanres = req.flash('dianzanres');
	res.locals.guanzhures = req.flash('guanzhures');
	


	// console.log(res.locals.loginError)
	// 挂载路由
	res.locals.path = req.path;
	// console.log(req.path);

	// next() 移交权限
	next()
});


app.use('/', index);
app.use('/create', create);

app.use('/dianzan',dianzan);
app.use('/users', users);
app.use('/video', video);
app.use('/ruanjian', ruanjian);
app.use('/shouce1', shouce1);
app.use('/shouce2', shouce2);
app.use('/Personal_Tailor', Personal_Tailor);
app.use('/study_manual', study_manual);
app.use('/check', check);
app.use('/training_battalion', training_battalion);
app.use('/guanzhu', guanzhu);
// app.use('/denglu', denglu);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
