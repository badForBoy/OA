$(document).ready(function() {
	$(".oa-collapse .items").find('.oa-header').click(function(event) {
		//debugger;
		$(this).next().stop();//清除运动
		$(this).next().slideToggle(200);
		$(this).toggleClass('on');
	});
});