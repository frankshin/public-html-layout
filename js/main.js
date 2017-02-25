$(document).ready(function() {
	// 初高中课程体系
	$(".course_tab_senior").click(function() {
		$(".course_tab_senior").addClass("current").siblings().removeClass("current");
		$(".course_senior").show();
		$(".course_junior").hide();
	})
	$(".course_tab_junior").click(function() {
		$(".course_tab_junior").addClass("current").siblings().removeClass("current");
	$(".course_junior").show();
		$(".course_senior").hide();
	})

	// 中高考重难点
	$(".point_tab_senior").click(function() {
		$(".point_tab_senior").addClass("current").siblings().removeClass("current");
		$(".point_senior").show();
		$(".point_junior").hide();
	})
	$(".point_tab_junior").click(function() {
		$(".point_tab_junior").addClass("current").siblings().removeClass("current");
		$(".point_junior").show();
		$(".point_senior").hide();
	})

	//层层筛选，严格教学培训，打造金牌辅导团(兼容ie7)
	$(".teachers_filtrate li:nth-child(odd)").addClass("odd");
	$(".teachers_filtrate li:nth-child(even)").addClass("even");
})



//底部报名浮动
$(function() {
	// 窗口滚动变化底部试听调整
	var document_height = 0;
	var window_height = 0;
	var scroll_height = 0;
	var $bottom_fixed = $('#bottom_fixed');
	var fixed_bottom = 0;

	function win_scroll_resize() {
		document_height = $(document).height();
		window_height = $(window).height();
		scroll_height = $(window).scrollTop();
		fixed_bottom = 300 - (document_height - window_height - scroll_height);
		if (fixed_bottom < 0) {
			fixed_bottom = 0;
		}
		$bottom_fixed.css('bottom', fixed_bottom + 'px');
	}
	win_scroll_resize();
	$(window).scroll(win_scroll_resize);
	$(window).resize(win_scroll_resize);
});