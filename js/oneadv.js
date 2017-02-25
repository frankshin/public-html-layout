$(function(){
    var num;
    $(".nav_left li").on("click",function(){
        $(".nav_left li").removeClass("active");
        $(this).addClass("active");
        num = $(this).index();
        $(".nav_right .rig_con").hide();
        $(".nav_right .rig_con:eq(" + num + ")").show();
    });
});