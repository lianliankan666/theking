// 路由文件目录

// 加载模块
var express = require('express');
// 定义路由
var router = express.Router();


// 加载对应的控制器
var shouce1 = require('../controllers/shouce1');

router.get('/',shouce1.index);



module.exports = router;  