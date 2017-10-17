// index.js 和 routes/index.js是对应的

// 创建对象
var Personal_Tailor = {};

// 定义视频页方法
Personal_Tailor.index = function(req, res) {
    
    // 响应模板
    res.render('Personal_Tailor');
}

// 向外导出
module.exports = Personal_Tailor;  
 