$('#index .body-list').click(function(){
	$('.row1').hide();
	$('#zyxq').show();
});
// 点击解答、直播、文章
$('.page').click(function(){
	$('#zyxq').hide();
	$('.jxqing').hide();
});
// 点击主页按钮
$('.zpage').click(function(){
	$('#zyxq').hide();
	$('#index').addClass("active");
	$('.row').show();
	$('.jxqing').hide();

});
$('.jieda-list').click(function(){
	$('#jieda').removeClass("active");
	$('.jxqing').show();
});

// 点击关注


// $('.guanzhu').click(function(){

// 	$('.guanzhu>b').html('取消关注');

	
// })