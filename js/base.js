//读取cookies
function getCookie(name){
	var arr, reg=new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg)){
		return unescape(arr[2]);
	}else{
		return null;
	}
}
//写cookies
function setCookie(name, value, days){
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 3600 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + date.toGMTString() + ";path=/";
}
$(function(){
	// placeholder 修复
	var JPlaceHolder = {
	    // 检测
	    _check: function(){
		    if(!!window.ActiveXObject){
			    return false;
		    }
	        return 'placeholder' in document.createElement('input');
	    },
	    // 修复
	    _fix: function(){
	        $('input[placeholder]').each(function(index, element) {
	            var $this = $(this);
		        var holder_txt = $this.attr('placeholder');
		        var val = $this.val();
		        if(val == ''){
			        $this.val(holder_txt);
		        }
		        $this.focusin(function(){
			        val = $this.val();
			        if(val == holder_txt){
				        $this.val('');
			        }
	            }).focusout(function(){
			        val = $this.val();
	                if(val == ''){
				        $this.val(holder_txt);
			        }
	            });
	        });
	    },
		// 初始化
	    init : function(){
	        if(!this._check()){
	            this._fix();
	        }
	    }
	};
	JPlaceHolder.init();
});