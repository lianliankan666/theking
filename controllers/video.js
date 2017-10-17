// index.js 和 routes/index.js是对应的

// 创建对象
var video = {};

// 定义视频页方法
video.index = function(req, res) {
    
    // 响应模板
    res.render('video');
}

// 向外导出
module.exports = video;  
 