//导航鼠标经过效果
$(document).ready(function() {
	var $liCur = $(".navigation li a.cur"),
		curP = $liCur.position().left,
		curW = $liCur.outerWidth(true),
		$slider = $(".curBg"),
		$navBox = $(".nav");
	$targetEle = $(".navigation li a"),
		$slider.animate({
			"left": curP,
			"width": curW
		});
	$targetEle.mouseenter(function() {
		var $this = $(this),
			_width = $this.outerWidth(true),
			posL = $this.position().left;
		$slider.stop(true, true).animate({
			"left": posL,
			"width": _width
		}, 250);
	});
	$navBox.mouseleave(function(cur, wid) {
		cur = curP;
		wid = curW;
		$slider.stop(true, true).animate({
			"left": cur,
			"width": wid
		}, 250);
	});
})

// 顶部logo和导航固定
$(document).ready(function() {
	$(window).scroll(function() {
		var i = $(window).scrollTop();
		if (i >= 47) {
			$(".nav-bar").addClass("nav-posi");
		} else {
			$(".nav-bar").removeClass("nav-posi");
		}
	});
})

// $(document).ready(function() {
// 	$(window).scroll(function() {
// 		var i = $(window).scrollTop();
// 		if (i >= 41) {
// 			$(".nav-bar").addClass("nav-posi");
// 		} else {
// 			$(".nav-bar").removeClass("nav-posi");
// 		}
// 	});
// })