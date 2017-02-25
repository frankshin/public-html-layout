$(function(){
    var html,
        lunbo;
    var cjbdata={
        "gaozhong":[
            { "tit":"王*","zj":"636分，被武汉大学电气工程及自动化专业录取","time":"3个月"},
            { "tit":"苏*荷","zj":"620分，被吉林大学录取，其中高考生物满分","time":"5个月"},
            { "tit":"李*","zj":"669分，数学提高43分，投档浙江大学","time":"5个月"},
            { "tit":"张*乐","zj":"632分，文综提高31分，被中国人民大学录取","time":"2个月"},
            { "tit":"庄*洁","zj":"652分，预录取同济大学，理综提高45分","time":"6个月"},
            { "tit":"王*","zj":"英语提高31分，数学提高27分，考入985院校","time":"5个月"},
            { "tit":"陈*言","zj":"668分，被清华大学法学专业录取","time":"4个月"},
            { "tit":"金*薇","zj":"669分，数学提高43分，投档浙江大学","time":"5个月"},
            { "tit":"张*","zj":"数学提高31分，从班级第32名考入前三名","time":"4个月"},
            { "tit":"王*","zj":"高二，寒假辅导生物10余天，开学模拟考一道18分的题目得到16分","time":"1个月"},
            { "tit":"黎*晴","zj":"高一，数学从90分以下提升至100分左右","time":"2个月"},
            { "tit":"王*辉","zj":"高三，地理历史均上升了20分左右","time":"8个月"},
            { "tit":"田*","zj":"高二，语文从90分提升至105分左右","time":"2个月"},
            { "tit":"陈*","zj":"高三，化学最近考了有史以来最高的75分","time":"4个月"},
            { "tit":"宛*新","zj":"高三，二模英语提升至134分，完型填空满分","time":"3个月"},
            { "tit":"李*运","zj":"高三，月考数学114，提高了10分","time":"7个月"}
        ],
        "chuzhong":[
            { "tit":"周*雅","zj":"初一，班级排名提升至底5，英语98；数学97；语文95","time":"2个月"},
            { "tit":"乔*林","zj":"初一，班级排名提升至底5，英语98；数学97；语文95","time":"1个月"},
            { "tit":"吕*远","zj":"初二，数学成绩从46分提升至85.5","time":"1个月"},
            { "tit":"韩*","zj":"初一，英语从98分提升至137.5分，作文22分","time":"4个月"},
            { "tit":"刘*冰","zj":"初三，数学从58分提升至111分，应用题仅错一道","time":"2个月"},
            { "tit":"张*佳","zj":"初三，数学从69.5分期末提升至83.5分，七科总分620","time":"1个月"},
            { "tit":"吴*雅","zj":"数学期末考试提升至134分，期中考试为94分","time":"2个月"},
            { "tit":"戴*妮 ","zj":"月考提升25分，学习方法得到很大改善","time":"1个月"},
            { "tit":"李*春","zj":"期末英语考试提升25分，做题技巧得到很大提升","time":"3个月"},
            { "tit":"李*琪 ","zj":"初二，物理成绩从69提升至92分，解答题全对","time":"4个月"}
        ],
        "jinbu":[
            { "tit":"田*","zj":"高一，英语提高20+，对英语产生浓厚兴趣","time":"2个月"},
            { "tit":"刘*","zj":"高一，4月月考全校排名提升100多名，排全校136名","time":"5个月"},
            { "tit":"刘*涵","zj":"高二，英语从100分提升到120分，数学由110分提升至120分","time":"5个月"},
            { "tit":"黄*","zj":"高一，生物从60多分提升至80多分","time":"3个月"},
            { "tit":"张*晓","zj":"高一，寒假一直补数学，开学后考试都在120分左右，涨分20+","time":"6个月"},
            { "tit":"吴*婷","zj":"高三，对学习热情持续升高，数学涨分10+","time":"1个月"},
            { "tit":"张*莲","zj":"高三，考试中数次考到老师讲过的内容，数学比以前提高10分左右","time":"1个月"},
            { "tit":"钟*炜","zj":"高三，数学从60分左右提升至90+，冲进全班前十","time":"3个月"},
            { "tit":"郑*逸","zj":"大一，辅导大学微积分，从48分至78分，下学期预约了线代辅导课","time":"3个月"},
            { "tit":"刘*滨","zj":"高三，每周辅导1次，数学二模考试考了120分，史上最高","time":"7个月"},
            { "tit":"包*","zj":"高一，数学从60分提升至80+，英语阅读理解基本不丢分","time":"2个月"},
            { "tit":"何*宇","zj":"高一，数学多次考出145+的成绩。化学生物进步也很快","time":"3个月"}
        ]
    }

    init();
    function init(){
        xuanr(cjbdata.gaozhong);
        lunbocj();
    }
    
    $(".tabqie").on("click",function(){
        var name=$(this).data("type");
        $(".tabqie").removeClass("borB2-red1");
        $(this).addClass("borB2-red1");
        switch (name) {
            case "gaozhong":
                xuanr(cjbdata.gaozhong);
                lunbocj();
                break;
            case "chuzhong":
                xuanr(cjbdata.chuzhong);
                lunbocj();
                break;
            case "jinbu":
                xuanr(cjbdata.jinbu);
                lunbocj();
                break;
        }
    });

    function xuanr(obj){
        $(".cjlist").html('');
        for(var a in obj){
            html='<li class="height-40 line-40 borB1-gray9 borL1-gray2">'+
                        '<div class="floatL width-145 text-center borR1-gray4">' + obj[a].tit + '</div>'+
                        '<div class="floatL width-460 text-center borR1-gray4 bg-red12">' + obj[a].zj + '</div>'+
                        '<div class="floatL width-145 text-center borR1-gray4">' + obj[a].time + '</div>'+
                    '</li>';
            $(".cjlist").append(html);
        }
    }

    function lunbocj(){
        // var lunboobj = $(".cjlist");
        // var lunboobj_hei = lunboobj.height();
        // var test = 0;
        // if(lunboobj_hei > 369){
        //     lunbo = setInterval(function(){
        //         lunboobj.animate({"margin-top": test + "px" },40,function(){
        //             test--;
        //             if(Math.abs(test) + 369 == lunboobj_hei){
        //                 clearInterval(lunbo);
        //                 test = 0;
        //             }
        //         });
        //     },40);
        // }
    }


    $(".close").on("click",function(){
        $(".videofuc,.shipin").hide();
        $(".yichu").html('');

    });
    $(".audiodj").on("click",function(){
        $(".videofuc,.shipin").show();
        bofang();
    });

    function bofang(){
        var option ={"auto_play":"0","file_id":"14651978969511322431","app_id":"1251748745","width":708,"height":400,"https":1};
        new qcVideo.Player(
                "id_video_container_14651978969511322431",
                option
            );
    }
    bofang();


})