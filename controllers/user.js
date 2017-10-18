/**
 * Created by SlzStar on 2017/10/17.
 */
var user = {};
//加载数据模型：
var userModel = require("../models/userModel");
//加载加密项；
var ctypto = require("../config/crypto_config");
//加载上传
var uploadFile = require("../config/uploadFile_config");
var sendEmail = require('../config/sendEmail_config');
user.setting = function (req, res) {
    //获取当前的信息;
    res.render("userSetting");
}
//更改密码页面
user.doSetting = function (req, res) {
    console.log(req.body.userpwd)
    console.log(req.session.user)
    var con = {
        _id: req.session.user._id,
        upwd: ctypto(req.body.userpwd)
    }
//  一次条件进行查询;
    userModel.findOne(con, function (err, data) {
        console.log(err, data)
        // console.log(err,data)
        if (!err && data) {
            //密码正确
            var newDate = {
                upwd: ctypto(req.body.userpwd2)
            }
            userModel.update(con, newDate, function (err, data) {
                //用户密码修改之后，清除session，并且跳转首页登录;
                req.session.user = null;
                res.redirect("/denglu");
            })
        } else {
            //说明原密码不正确;
            req.flash("loginError", "原密码不正确");
            res.redirect("back");
        }


    })


}

//更改头像
user.doChangeimg = function (req, res) {
    // 定义文件存储的位置
    var savePath = 'public/uploads';
    // 允许上传的文件类型
    var allowType = ['image/jpeg', 'image/png', 'image/gif'];
    // 允许上传的文件大小
    var fileSize = 1024 * 1024 * 10;
    // 获取上传函数
    var upload = uploadFile(savePath, allowType, fileSize).single('userpic');

    // 调用上传
    upload(req, res, function (err) {
        if (err) {
            // console.log(err.code)
            switch (err.code) {
                case 'FILEFILTER':
                    req.flash('fileError', '文件类型不合...')
                    break;
                case 'LIMIT_FILE_SIZE':
                    req.flash('fileError', '文件太大了...')
                    break;
            }

            // 跳转回去
            res.redirect('back');

            return;
        }
        var con = {
            _id: req.session.user._id
        };

        var newData = {
            userimg: req.file.filename
        }
        //错误出现在这块？？？？？
        userModel.update(con, newData, function (err) {
            if (!err) {
                // 更新session
                req.session.user.userimg = req.file.filename;

                // 直接跳转
                res.redirect('back');

            }
        })
    })
}

//绑定邮箱页面设置；
user.checkemail = function (req, res) {
    // console.log(req.query.useremail)
    // console.log(req.query.useremail)
    var con = {
        useremail: req.query.useremail,
        _id: req.session.user._id
    }
    userModel.findOne(con, function (err, data) {
        if (!err && data) {
            //不能绑定邮箱，已经被占用
            res.json({
                code: 0
            })
        } else {
            //能绑定邮箱，没有被占用；
            res.json({
                code: 1
            })
        }
    })
}

//改变用户邮箱地址；
user.useremail = function (req, res) {
    //条件
    var con = {
        _id: req.session.user._id
    }
    //接受参数
    var newDate = {
        useremail: req.body.useremail
    }
    //更新
    userModel.update(con, newDate, function (err) {
        if (!err) {
            sendEmail(req.session.user._id, req.body.useremail, function (err, info) {
                console.log(err)
                console.log(info)
            })
        }
    })
}
//向外导出;
module.exports = user;