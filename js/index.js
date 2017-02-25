
var option;
var kechengdata = {
    "senior":[
        {
            "imgurl":"images/fudaojun_math2.png",
            "title":"高中数学",
            "descript":[
                "基础题10天专项突破",
                "解答题五大专项满分突破",
                "2017年高考数学命题趋势",
                "易错、易丢分专题20讲",
                "数学应试技巧专题选讲"
            ],
            "videopath":"14651978969511322349",
            "classname":"高中数学-等比数列的介绍"
        },
        {
            "imgurl":"images/fudaojun_chinese2.png",
            "title":"高中语文",
            "descript":[
                "常见病句类型总结",
                "古诗词鉴赏专题",
                "文言文阅读精讲",
                "现代文阅读专题",
                "高中作文专题辅导"
            ],
            "videopath":"14651978969511322358",
            "classname":"高中语文-高考作文审题"
        },
        {
            "imgurl":"images/fudaojun_english2.png",
            "title":"高中英语",
            "descript":[
                "听力30天专项突破",
                "作文专项突破",
                "易错、易丢分专题20讲",
                "英语应试技巧专题选讲",
                "英语口语专项"
            ],
            "videopath":"14651978969511322338",
            "classname":"高中英语-非谓语动词"
        }
    ],
    "junior":[
        {
            "imgurl":"images/fudaojun_math2.png",
            "title":"初中数学",
            "descript":[
                "选择、填空限时满分突破10讲",
                "数学压轴题经典题型20讲",
                "2017年中考数学命题趋势",
                "易错、易丢分专题20讲",
                "数学应试技巧专题选讲"
            ],
            "videopath":"14651978969511322291",
            "classname":"初中数学-抛物线"
        },
        {
            "imgurl":"images/fudaojun_chinese2.png",
            "title":"初中语文",
            "descript":[
                "语文基础30天专项突破",
                "文言文、现代文专项突破",
                "中考作文高分突破",
                "经典优美文章解析20篇",
                "语文应试技巧专题选讲"
            ],
            "videopath":"14651978969511322325",
            "classname":"初中语文-文言文"
        },
        {
            "imgurl":"images/fudaojun_english2.png",
            "title":"初中英语",
            "descript":[
                "听力30天专项突破",
                "完型填空、阅读理解专项突破",
                "中考作文专项突破",
                "易错、易丢分专题20讲",
                "英语应试技巧专题选讲"
            ],
            "videopath":"14651978969511322288",
            "classname":"初中英语-that引导的定语从句"
        }
    ]
}

var descript = [];
var html = [];
function classdata(data,obj){
    for(var a in data){
        descript = [];
        for(var b in data[a].descript){
            descript = descript + '<a href="javascript:void(0);" class="zixun_btn">' + data[a].descript[b] + '<br></a>';
        }
        html = '<li data-scroll-reveal="enter bottom over 1s and move 20px" ng-repeat="data in kechengdata.senior">'+
                    '<div class="dw width-240 MT30 mar-center">'+
                        '<img class="wid-100 img-block" src="'+ data[a].imgurl +'">'+
                        '<div class="absol left0 top0 wid-100 hei-100 opacity05 bg-black bgfc"></div>'+
                        '<div class="auto_icon" title="' + data[a].classname + '" data-id="' + data[a].videopath + '"></div>'+
                    '</div>'+
                    '<h4>' + data[a].title + '</h4>'+
                    '<p>' + descript + '</p>'+
                    '<button type="button" class="zixun_btn width-100 height-30 bg-red11 FS-18 MT-4 mar-center out-none bor-none FC-white text-center line-30 pointer">预约测试</button>'+
                '</li>';
        $("."+obj).append(html);
    }
}
classdata(kechengdata.senior,'senior');

$(".senior_tab").click(function() {
    $(".senior_tab").addClass("current").siblings().removeClass("current");
    $(".senior").show();
    $(".junior").hide();
    if($(".senior li").length == 0){
        classdata(kechengdata.junior,'senior');
    }
})
$(".junior_tab").click(function() {
    $(".junior_tab").addClass("current").siblings().removeClass("current");
    $(".junior").show();
    $(".senior").hide();
    if($(".junior li").length == 0){
        classdata(kechengdata.junior,'junior');
    }
})

$(document).on("click",".auto_icon",function(){
    var videoid = $(this).data("id");
    $(".spcont").attr("id","id_video_container_" + videoid);
    cjvideo(videoid);

    var name = $(this).attr("title");
    $(".class-tit").html(name);
    $(".videofuc,.shipin").show();
    $("body").addClass("overtest");
});


function cjvideo(obj){
    option ={"auto_play":"0","file_id":obj,"app_id":"1251748745","width":800,"height":476,"https":1};
    new qcVideo.Player(
        "id_video_container_" + obj,
        option
    );
}


$(".close").on("click",function(){
    $(".videofuc,.shipin").hide();
    $("body").removeClass("overtest");
    $(".spcont").html('');
});

