
// 加载模块 
var express = require('express');
var router = express.Router();

// 加载对应的控制器
var create = require('../controllers/create');
// 引入检测用户是否登录的中间件
var checkUserLogin = require('../middlewares/checkUserLogin');
// console.log(checkUserLogin)

// router.get('/create', create.fabu);

router.get('/fabu', checkUserLogin, create.fabu);

router.post('/docreate', checkUserLogin, create.docreate);


// router.get('/details/:_id', topic.details);



module.exports = router;
