// index.js 和 routes/index.js是对应的

// 创建对象
var guanzhu = {};

// 定义视频页方法
guanzhu.index = function(req, res) {
    
    // 响应模板
    res.render('guanzhu');
}

// 向外导出
module.exports = guanzhu;  