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