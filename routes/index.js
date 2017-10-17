
// 加载模块 
var express = require('express');
var router = express.Router();

// 加载对应的控制器
var index = require('../controllers/index')
var checkUserLogin = require('../middlewares/checkUserLogin')

/* GET home page. */
router.get('/', index.index);
router.get('/denglu', index.denglu);

router.get('/reg', index.reg);

router.get('/likecourse',index.likecourse);
router.get('/shaixuan',index.shaixuan);
router.get('/homepage', checkUserLogin , index.homepage);
router.get('/huodong',index.huodong);

router.get('/wenzhang', index.wenzhang);
// 检测用户名是否可用的路由
router.get('/checkUser', index.checkUser);


// 处理用户注册的数据
router.post('/doReg', index.doReg);

// 处理登录数据
router.post('/doLogin', index.doLogin);

router.get('/logout', index.logout);

module.exports = router;
