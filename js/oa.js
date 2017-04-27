$(document).ready(function() {
	$(".content").load("echarts.html");
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



	$(".heder-nav-list ul li .title").click(function(event) {
		$(this).parent().addClass('on').siblings($(this).parent()).removeClass('on');
	});

	$(".heder-nav-list ul li .tabs").click(function(event) {//Tabs 标签页
		$(".content").load("tabs.html")
	});
	$(".heder-nav-list ul li .teps").click(function(event) {//Steps 步骤条
		$(".content").load("steps.html")
	});
	$(".heder-nav-list ul li .dropdown").click(function(event) {//Dropdown 下拉框
		$(".content").load("dropdown.html")
	});
	$(".heder-nav-list ul li .oa-modal").click(function(event) {//Modal 对话框
		$(".content").load("modal.html")
	});
	$(".heder-nav-list ul li .jedate").click(function(event) {//Jedate 时间组件
		$(".content").load("jedate.html")
	});
	$(".heder-nav-list ul li .carousel").click(function(event) {//Carousel 走马灯
		$(".content").load("carousel.html")
	});
	$(".heder-nav-list ul li .collapse").click(function(event) {//Collapse 折叠面板
		$(".content").load("collapse.html")
	});
	$(".heder-nav-list ul li .oa-popconfirm").click(function(event) {//Popconfirm 气泡确认框
		$(".content").load("popconfirm.html")
	});
	$(".heder-nav-list ul li .echarts").click(function(event) {//ECharts 图表
		$(".content").load("echarts.html")
	});


	$click = $(".header-top .items li");
	$items = $("#items").find('.word-click');
	var currnt = 0;
	$click.click(function(event) {
		var current = $(this).index();
		var $navList = $(this).parents(".header-top").next().find('.heder-nav-list');
		$getVal = $(this).find('a').text();
		$(".header-top .items").find('.word-click span').empty().text($getVal);
		$navList.eq(current).show().siblings($navList).hide();
	});











	$(".item0").click(function(event) {
		$(".content").load("dashboard.html")
	});
	$(".item10").click(function(event) {
		$(".content").load("tabls.html")
	});
	$(".item11").click(function(event) {
		$(".content").load("form.html")
	});
	$(".item1").click(function(event) {//Menu 导航菜单
		$(".content").load("menu.html")
	});
	$(".item2").click(function(event) {//Tabs 标签页
		$(".content").load("tabs.html")
	});
	$(".item3").click(function(event) {//Steps 步骤条
		$(".content").load("steps.html")
	});
	$(".item4").click(function(event) {//Dropdown 下拉框
		$(".content").load("dropdown.html")
	});
	$(".item5").click(function(event) {//Modal 对话框
		$(".content").load("modal.html")
	});
	$(".item6").click(function(event) {//Jedate 时间组件
		$(".content").load("jedate.html")
	});
	$(".item7").click(function(event) {//Carousel 走马灯
		$(".content").load("carousel.html")
	});
	$(".item8").click(function(event) {//Collapse 折叠面板
		$(".content").load("collapse.html")
	});
	$(".item9").click(function(event) {//Popconfirm 气泡确认框
		$(".content").load("popconfirm.html")
	});
	$(".item12").click(function(event) {//ECharts 图表
		$(".content").load("echarts.html")
	});
});