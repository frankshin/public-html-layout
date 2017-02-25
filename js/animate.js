// 首页鼠标滚动监听动画
$(function() {
	if ($(".step1")[0]) var n = $(".step1").offset().top - $(window).height();
	if ($(".step2")[0]) var r = $(".step2").offset().top - $(window).height();
	if ($(".step3")[0]) var e = $(".step3").offset().top - $(window).height();
	if ($(".step4")[0]) var t = $(".step4").offset().top - $(window).height();
	if ($(".step5")[0]) var m = $(".step5").offset().top - $(window).height();
	var o = $("body").scrollTop();
	o > n && ($(".step1").addClass("animated"));
	$(window).scroll(function() {
		var i = $(window).scrollTop();
		i > r && ($(".step2").addClass("animated"));
		i > e && ($(".step3").addClass("animated"));
		i > t && ($(".step4").addClass("animated"));
		i > m && ($(".step5").addClass("animated"));

	})
})