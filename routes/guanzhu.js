// 路由文件目录

// 加载模块
var express = require('express');
// 定义路由
var router = express.Router();


// 加载对应的控制器
var guanzhu = require('../controllers/guanzhu');

router.get('/',guanzhu.index);



module.exports = router;  
  