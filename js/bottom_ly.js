function getCookie(name) {
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if (arr = document.cookie.match(reg)) {
		return unescape(arr[2])
	} else {
		return null
	}
}

function setCookie(name, value, days) {
	var date = new Date();
	date.setTime(date.getTime() + days * 24 * 3600 * 1000);
	document.cookie = name + "=" + escape(value) + ";expires=" + date.toGMTString() + ";path=/"
}
$(function() {
	$('div.wrapper').hide();
	$('#bottom_fixed_sure_btn').click(function() {
		var $this = $(this);
		var name = $.trim($('#bottom_fixed_name_input').val());
		if (name == $('#bottom_fixed_name_input').attr('placeholder') || name == '' || name == null) {
			alert('请填写姓名');
			return false
		}
		var phone = $.trim($('#bottom_fixed_phone_input').val());
		if (phone == $('#bottom_fixed_phone_input').attr('placeholder') || phone == '' || phone == null) {
			alert('请填写手机号');
			return false
		}
		if (!/^1\d{10}$/.test(phone)) {
			alert('请填写正确的手机号');
			return false
		}
		if (getCookie('commit_videolive_info') == '1') {
			alert('您已经提交过了哦~');
			return false
		}
		$this.css('opacity', '0.6');
		setCookie('commit_videolive_info', '1', 1);
		$('#item_name input[name="name"]').val(name);
		$('#item_mobile input[name="mobile"]').val(phone);
		$('#submitItem a').click()
	});
	var JPlaceHolder = {
		_check: function() {
			if (!!window.ActiveXObject) {
				return false
			}
			return 'placeholder' in document.createElement('input')
		},
		_fix: function() {
			$('input[placeholder]').each(function(index, element) {
				var $this = $(this);
				var holder_txt = $this.attr('placeholder');
				var val = $this.val();
				if (val == '') {
					$this.val(holder_txt)
				}
				$this.focusin(function() {
					val = $this.val();
					if (val == holder_txt) {
						$this.val('')
					}
				}).focusout(function() {
					val = $this.val();
					if (val == '') {
						$this.val(holder_txt)
					}
				})
			})
		},
		init: function() {
			if (!this._check()) {
				this._fix()
			}
		}
	};
	JPlaceHolder.init()
});