// index.js 和 routes/index.js是对应的

// 创建对象
var study_manual = {};

// 定义视频页方法
study_manual.index = function(req, res) {
    
    // 响应模板
    res.render('study_manual');
}

// study_manual
module.exports = study_manual;  
 