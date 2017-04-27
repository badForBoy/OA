$(document).ready(function() {
	var current=0;
	var number = $(".carousel-automatic .slick-track div");
	var $length = number.length;

	$(".carousel-automatic .slick-track").css('width', $length*100 + '%');

	$(".slick-dots li").click(function(event) {
		var current = $(this).index();
		var $left = -(current)*100 + '%';
		$(this).addClass('on').siblings($(this)).removeClass('on');
		$(this).parent().prev().animate({left:$left}, 300);
	});

	//定时器的使用，自动开始
    timer = setInterval(function (){
        current++;
        if(current==number.length-1){
        	number.parent().next().find('li').eq(0).addClass('on').siblings(number.parent().next().find('li')).removeClass('on');
        };
        if(current==number.length){
        	number.parent().css('left', 0 + '%');
        	current=1;
        };
        number.parent().animate({left: -(current)*100 + '%'}, 300);
        number.parent().next().find('li').eq(current).addClass('on').siblings(number.parent().next().find('li')).removeClass('on');
    },2000);

    //hover事件完成悬停
    $(".carousel-automatic").hover(function(){
        clearInterval(timer);
        },function(){
        timer = setInterval(function (){
        current++;
        if(current==number.length-1){
        	number.parent().next().find('li').eq(0).addClass('on').siblings(number.parent().next().find('li')).removeClass('on');
        };
        if(current==number.length){
        	number.parent().css('left', 0 + '%');
        	current=1;
        };
        number.parent().animate({left: -(current)*100 + '%'}, 300);
        number.parent().next().find('li').eq(current).addClass('on').siblings(number.parent().next().find('li')).removeClass('on');
    },2000);
    })
});