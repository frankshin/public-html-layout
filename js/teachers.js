var html='';
var cjbdata={
    "gaozhong":[
        { "tit":"李碧秋","zj":"华东师范学校","time":"英语"},
        { "tit":"王静","zj":"南京大学","time":"数学"},
        { "tit":"何可","zj":"上海交通大学","time":"数学"},
        { "tit":"刘宗慧","zj":"吉林大学","time":"语文"},
        { "tit":"李梦琴","zj":"浙江大学","time":"数学"},
        { "tit":"焦易博","zj":"北京大学","time":"英语"},
        { "tit":"洪文华","zj":"浙江大学","time":"物理"},
        { "tit":"向佩珊","zj":"浙江大学","time":"化学"},
        { "tit":"王增豪","zj":"浙江大学","time":"数学"},
        { "tit":"王超雄","zj":"南京大学","time":"生物"}
    ],
    "chuzhong":[
        { "tit":"杨雯娟","zj":"南京大学","time":"数学"},
        { "tit":"汪峡","zj":"北京大学","time":"英语"},
        { "tit":"阮诗想","zj":"浙江大学","time":"物理"},
        { "tit":"何婕","zj":"华中科技大学","time":"数学"},
        { "tit":"刘少聪","zj":"浙江大学","time":"数学"},
        { "tit":"陈冬妍","zj":"吉林大学","time":"数学"},
        { "tit":"宋若潇","zj":"武汉大学","time":"英语"},
        { "tit":"刘欣","zj":"中山大学","time":"英语"},
        { "tit":"王汉林","zj":"浙江大学","time":"数学"},
        { "tit":"张甜","zj":"华东师范大学","time":"数学"}
    ]
};


function xuanr(obj){
    html = '';
    for(var a in obj){
        html = html + '<li class="height-40 line-40 borB1-gray9 borL1-gray2">'+
                    '<div class="floatL width-111 text-center borR1-gray4">' + obj[a].tit + '</div>'+
                    '<div class="floatL text-center borR1-gray4 bg-red12" style="width:318px;">' + obj[a].zj + '</div>'+
                    '<div class="floatL width-111 text-center borR1-gray4">' + obj[a].time + '</div>'+
                '</li>';
    }
    return html;
}

$(".cjlist").html(xuanr(cjbdata.gaozhong));
$(".cjlist2").html(xuanr(cjbdata.chuzhong ));
