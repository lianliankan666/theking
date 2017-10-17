// index.js 和 routes/index.js是对应的

// 创建对象
var training_battalion = {};

// 定义视频页方法
training_battalion.index = function(req, res) {
    
    // 响应模板
    res.render('training_battalion');
}

// 向外导出
module.exports = training_battalion;  
 