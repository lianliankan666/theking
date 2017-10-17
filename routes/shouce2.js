// 路由文件目录

// 加载模块
var express = require('express');
// 定义路由
var router = express.Router();


// 加载对应的控制器
var shouce2 = require('../controllers/shouce2');

router.get('/',shouce2.index);



module.exports = router;   
  