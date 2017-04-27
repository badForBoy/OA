$(document).ready(function() {
	//var length = $(".steps-icon").find('.items').length;
	//$(".items").css('width', '33.333333%');
	//$(".steps > .items").css('width', '33.3333333%');

	$(".steps-horizontal").each(function(index, el) {
		var $length = $(this).find('.items').length;
		$(this).find('.items').css('width',1/($length-1)*100 + "%");
		console.log(1/($length-1)*100 + "%");
	});
});