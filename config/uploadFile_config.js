// 引入Multer/path/uid/time-stamp模块
var multer = require('multer');
var path = require('path');
var uid = require('uid');
var timeStamp = require('time-stamp');

/**
 * 定义上传文件的函数 uploadFile()
 * @param string savePath 文件存储的目录
 * @param array allowType 允许上传的文件类型
 * @param number fileSize 允许上传的文件大小
 */
function uploadFile(savePath, allowType, fileSize) {
    // 设置上传的文件存储位置和文件名的命名规则
    var storage = multer.diskStorage({
        // 位置
        destination: function(req, file, cb) {
            cb(null, savePath)
        },
        // 文件名
        filename: function(req, file, cb) {
            // 扩展名
            var extname = path.extname(file.originalname);
            var filename = timeStamp('YYYYMMDDHHmmssms') + uid(10) + extname;
            // 存储
            cb(null, filename)
        }
    });

    // 文件类型过滤
    function fileFilter(req, file, cb) {
        // 判断文件类型是否符合要求
        // file.mimetype
        if (allowType.indexOf(file.mimetype) == -1) {
            // 文件类型不合适
            var error = new Error();
            error.code = 'FILEFILTER';
            // 传递错误
            cb(error);
            // 不存储
            cb(null, false);
        } else {
            // 存储
            cb(null, true);
        }
    }

    // 获取上传的函数对象
    var upload = multer({
        storage: storage,
        fileFilter: fileFilter,
        limits: {
            fileSize: fileSize
        }
    });

    // 返回
    return upload;
}

// 将模块向外暴露
module.exports = uploadFile;