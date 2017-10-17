$('.vid-btm-top>h4').click(function(){

    var left = $(this).index();

    var ps = 150;
   

    
    $('#video-bottom .huatiao').animate({left:ps*left},500);

    // console.log($('#video-bottom .huatiao').width)
    
})




