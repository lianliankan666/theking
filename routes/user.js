var express = require('express');
var router = express.Router();
var user = require("../controllers/user");
//引用判断用户是否登录的判断项
var checkUserLogin = require("../middlewares/checkUserLogin");
router.all("*",checkUserLogin);
/* GET users listing. */
router.get('/setting', user.setting);
//更改密码操作；
router.post("/doSetting",user.doSetting);
//更改头像;
router.post('/doChangeimg', user.doChangeimg);

//绑定邮箱；
router.get("/checkemail",user.checkemail)

//处理邮箱数据路由;
router.post("/useremail",user.useremail)
module.exports = router;
