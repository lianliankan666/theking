/*当点击我的课程时*/
	$('.mu-wdkc').click(function(){
		$('.mu-xuan ul li.active').removeClass('active');
		$(this).addClass('active');
		$('.mu-right-wdkc').show();
		$('.mu-right-wdgz').hide();
		$('.mu-right-wdsc').hide();
		$('.mu-right-lsjl').hide();
	})
	/*当点击我的课程时结束*/

	/*我的课程里的选项卡*/
	$('.mu-xxjd').click(function(){
		$('.mu-right-xuan .active').removeClass('active');
		$(this).addClass('active');
		$('.mu-xxjd1').show();
		$('.mu-kc1').hide();
	});
	$('.mu-kc').click(function(){
		$('.mu-right-xuan .active').removeClass('active');
		$(this).addClass('active');
		$('.mu-xxjd1').hide();
		$('.mu-kc1').show();
		/*我的课程里的选项卡结束*/
	})

	/*当点击我的关注时*/
	$('.mu-wdgz').click(function(){
		$('.mu-xuan ul li.active').removeClass('active');
		$(this).addClass('active');
		$('.mu-right-lsjl').hide();
		$('.mu-right-wdsc').hide();
		$('.mu-right-wdkc').hide();
		$('.mu-right-wdgz').show();
		/*当点击我的关注时结束*/
	})

	/*我的关注里的选项卡*/
	$('.mu-gzdr').click(function(){
		$('.mu-gzdr1').show();
		$('.mu-fs1').hide();
		$('.mu-right-xuan1 .active').removeClass('active');
		$(this).addClass('active');
	});
	$('.mu-fs').click(function(){
		$('.mu-gzdr1').hide();
		$('.mu-fs1').show();
		$('.mu-right-xuan1 .active').removeClass('active');
		$(this).addClass('active');
	});
	/*我的关注里的选项卡结束*/

	/*当点击我的收藏时*/
	$('.mu-wdsc').click(function(){
		$('.mu-xuan ul li.active').removeClass('active');
		$(this).addClass('active');
		$('.mu-right-wdkc').hide();
		$('.mu-right-wdgz').hide();
		$('.mu-right-lsjl').hide();
		$('.mu-right-wdsc').show();
	/* 当点击我的收藏时结束*/
	})
	/*当点击历史记录时*/
	$('.mu-lsjl').click(function(){
		$('.mu-xuan ul li.active').removeClass('active');
		$(this).addClass('active');
		$('.mu-right-wdkc').hide();
		$('.mu-right-wdgz').hide();
		$('.mu-right-lsjl').show();
		$('.mu-right-wdsc').hide();
	/*当点击历史记录时结束*/
	})