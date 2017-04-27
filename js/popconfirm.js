$(document).ready(function() {
	$(".popconfirm-btn").click(function(event) {
		var X = $(".popconfirm-position").offset();
		var $modal = $(this).prev();
		$(this).next().show();
		$(this).parent().find('.popconfirm-top').css({
			left: X.left - 425,
			top: X.top - 250
		});
		$(this).parent().find('.popconfirm-bottom').css({
			left: X.left - 425,
			top: X.top - 100
		});
		$(this).parent().find('.popconfirm-left').css({
			left: X.left - 575,
			top: X.top - 185
		});
		$(this).parent().find('.popconfirm-right').css({
			left: X.left - 265,
			top: X.top - 190
		});
		console.log(X.top)
	});

	$(".popconfirm-close").click(function(event) {
		$(this).parents(".popconfirm").hide();
	});
});