// console.log($)
$(function(){
	// 定义标记。用于判断点击事件
	
	$('.course').each(function(index,itme){
		var courseStr = false;
		$(this).click(function(){
			if(!courseStr){
				$(this).find('#xuanzhe').find('img').attr('src','/imgs/duigou-xuanzhong.png')
				courseStr = true;
			}else{
				$(this).find('#xuanzhe').find('img').attr('src','/imgs/duigou-weixuanzhong.png')
				courseStr = false;
			}
		})
			
	})
})