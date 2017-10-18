/**
 * Created by SlzStar on 2017/10/17.
 */
var nodemailer = require('nodemailer');

/**
 * 定义发送验证激活账户邮件的方法 sendMail()
 * @param string _id 用户的_id
 * @param string email 要发送邮件的email地址
 * @param callback cb 接收错误信息的函数
 */
function sendEmail(_id, email, cb) {
    // 复制
    var transporter = nodemailer.createTransport({
        service: '163',

        auth: {
            user: 'm15300308719@163.com',
            pass: 'sunlizhen123456'
        }
    })

    // 定义主题的内容
    var subject = 'UI官网注册激活邮件';
    // 邮件的内容
    var html = `恭喜你注册UI官网，请点击一下链接进行账户的激活<a href="localhost/activeEmail?_id=${_id}&useremail=${email}">账户激活</a>`;

    // 设置邮件发送的选项
    var mailOptions = {
        // 从哪个邮箱发过去
        from: '"UI官网" <m15300308719@163.com>',
        to: email,
        subject: subject,
        // text:  // 只支持文本
        html: html
    }

    // 发送
    transporter.sendMail(mailOptions, function(error, info) {
        cb(error, info)
    })
}

// 向外导出
module.exports = sendEmail;