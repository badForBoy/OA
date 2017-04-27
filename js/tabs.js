$(document).ready(function() {
	$('.tabs .tabs-nav').find('.items').click(function(event) {
		var number = $(this).index();//
		$(this).addClass('on').siblings($('.tabs .tabs-nav').find('items')).removeClass('on');//点击按钮添加class（on）,移除同级元素的on;
		$(this).parent().next().find('.items').eq(number-1).show().siblings($(this).parent().next().find('.items')).hide();
	});
});