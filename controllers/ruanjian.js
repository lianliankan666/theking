// index.js 和 routes/index.js是对应的

// 创建对象
var ruanjian = {};

// 定义视频页方法
ruanjian.index = function(req, res) {
    
    // 响应模板
    res.render('ruanjian');
}

// 向外导出
module.exports = ruanjian;  
 