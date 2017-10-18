// index.js 和 routes/index.js是对应的

// 定义对象
var dianzan = {};


var userModel = require('../models/userModel');
var uimanyModel = require('../models/uimanyModel');
var cryptoStr = require('../config/crypto_config');

dianzan.index = function(req, res) {
	// 响应模板
	// res.send(req.body);
	// console.log(req.body.uname);

	// 获取依赖哪个参数
	var con = {
		uname: req.body.uname
	}
	// console.log(con);
	// 以此条件查询
	
	userModel.update(con, {$inc:{dianzan:1}}, function(err){
		// console.log(err);
		if (!err) {
			res.send(200,'ok')
					
		} else {
			res.send(200,'no')
			
		}
		
	})
}



// 添加关注


dianzan.guanzhu = function(req, res) {
    // 响应模板
    // res.send(req.body)

    // 获取依赖哪个参数
    var con = {
        uname: req.body.uname
    }

    // 以此条件查询
    
    userModel.update(con, {$inc:{guanzhu:1}}, function(err){
        // console.log(err);
        if (!err) {
            res.send(200,'ok')
                    
        } else {
            res.send(200,'no')
            
        }
        
    })
}

// 向外导出
module.exports = dianzan;  
 