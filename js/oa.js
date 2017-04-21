$(document).ready(function() {
	$(".content").load("dashboard.html");
	var $li = $(".nav .nav-list ul li a");
	var $submune = $(".nav .nav-list ul li ul.submune");

	$li.click(function(event) {
		//event.preventDefault();//清除元素（a标签）默认行为
		if ($(this).parent().find('.submune li').length > 0) {//判断是否有下拉列表
			$(this).toggleClass('move');//动态添加class（on）,添加点击后底色变化以及'>'的H5旋转动画
			$(this).next().stop();//清除运动
			$(this).next().slideToggle(200);//动态显隐下拉列表
		}
		$(this).parent().addClass('on').siblings().removeClass("on");
	});

	$(".item1").click(function(event) {
		$(".content").load("dashboard.html")
	});
	$(".item2").click(function(event) {
		$(".content").load("tabls.html")
	});
	$(".item3").click(function(event) {
		$(".content").load("form.html")
	});
});