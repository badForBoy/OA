$(document).ready(function() {
	$(".oa-modal").find('.btn').click(function(event) {
		$(this).next().fadeIn(200);
	});
	$(".oa-modal").find('i.close').click(function(event) {
		$(this).parent().parent().parent().fadeOut(200);
	});
	$(".btn-close").click(function(event) {
		$(this).parents(".oa-modal-content").fadeOut(200);
	});
});