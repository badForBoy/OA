$(document).ready(function() {
	var flag = false;

	$(".dropdown-menu").hide();

	$(".dropdown-click").find('button').click(function(event) {
		$(this).next().show();
		if (!$(".dropdown-menu").is(':hidden')) {
			flag = true;
		}	
	});

	$(".dropdown-word-click").find('.word-click').click(function(event) {
		//debugger;
		$(this).find('i').addClass('on');
		$(this).next().show();
		if (!$(".dropdown-menu").is(':hidden')) {
			flag = true;
		}
	});

	$(".dropdown-menu").find('a').click(function(event) {
		$(this).parent().parent().hide(); 
		$(this).parent().parent().prev().find('i').removeClass('on');
		if ($(".dropdown-menu").is(':hidden')) {
			flag = true;
		}
	});

	// $(window).click(function(event) {
	// 	if ($(".dropdown-menu").is(':hidden')) {
	// 		return false;
	// 	} else{
	// 		$(".dropdown-menu").hide();
	// 	}
	// });

	// console.log(flag);

});