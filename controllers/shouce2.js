// index.js 和 routes/index.js是对应的

// 创建对象
var shouce2 = {};

// 定义视频页方法
shouce2.index = function(req, res) {
    
    // 响应模板
    res.render('shouce2');
}

// 向外导出
module.exports = shouce2;  
 