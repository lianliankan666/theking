// 引入系统模块
var crypto = require('crypto');

/**
* 定义加密字符串的方法 cryptoStr()
* @param string inputStr 要进行加密的字符串
* return string outputStr 加密之后的字符串
*/
function cryptoStr(inputStr) {
	/*
		加密方式：
			md5 将任意一段字符串加密成32位的密文
				撞库 ===> 自己有一个数据了特别大的数据库 ---> 尝试登陆服务器
			sha
			sha1

	*/ 
	// getHashes() 使用Hash方式加密数据的算法的种类
	// console.log(crypto.getHashes())

	/*
	// 创建加密方式 -- md5
	var md5 = crypto.createHash('md5');

	// inputStr 需要进行加密的字符串

	// 执行加密并输出
	var outputStr = md5.update(inputStr).digest('hex');

	console.log(outputStr);
	*/

	// sha1
	var sha1 = crypto.createHash('sha1');
	// console.log(inputStr);
	var outputStr = sha1.update(inputStr).digest('hex');

	// 返回结果
	return outputStr;
}

// 调用函数
// cryptoStr('123456');	//md5 - e10adc3949ba59abbe56e057f20f883e
// console.log(cryptoStr('123456')); // sha1 - 7c4a8d09ca3762af61e59520943dc26494f8941b

// 将加密字符串的函数向外导出
module.exports = cryptoStr;