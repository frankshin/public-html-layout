// banner
$(function() {
	var unslider = $('.banner').unslider({
		delay: 5000,
		arrows: false,
		fluid: true,
		dots: true,
		autoplay: true
	})

	$('.unslider-arrow').click(function() {
		var fn = this.className.split(' ')[1];
		unslider.data('unslider')[fn]();
	});

	$('.banner').hover(function() {
		$('.unslider-arrow').fadeToggle();
	})
});

// banner活动规则
$(document).ready(function() {
	$(".activity_rule").click(function() {
		$(".activity_rule_box").show();
	});
	$(".activity_rule_box .close").click(function() {
		$(".activity_rule_box").hide();
	});
})