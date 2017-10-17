// index.js 和 routes/index.js是对应的

// 创建对象
var check = {};

// 定义视频页方法
check.index = function(req, res) {
    
    // 响应模板
    res.render('check');
}

// 向外导出
module.exports = check;  
 