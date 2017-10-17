// index.js 和 routes/index.js是对应的

// 创建对象
var shouce1 = {};

// 定义视频页方法
shouce1.index = function(req, res) {
    
    // 响应模板
    res.render('shouce1');
}

// 向外导出
module.exports = shouce1;  
 