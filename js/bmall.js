
var index=0
//  鼠标移入小圆点，显示对应图片事件
$(".slider-circle>li").mouseenter(function(){
      index=$(this).index()
      bn()
    $(".slider-img>li").css({
        opacity:0,
    })
    $(".slider-img>li").eq(index).animate({
        opacity:1
    },function(){
    })
})
// 下一张点击事件
$(".slider-arrow-next").click(function(){
    $(".slider-img>li").css({
        // zIndex:99,
        opacity:0,  
    })
    if(index==3){
        index=0
    }else{
        index=index+1
    }
    bn()
    $(".slider-img>li").eq(index).animate({
        opacity:1
    })
})
// 前一张点击事件
$(".slider-arrow-prev").click(function(){
    $(".slider-img>li").css({
        opacity:0,
    })
    if(index==0){
        index=3
    }else{
        index=index-1
    }
    bn()
    $(".slider-img>li").eq(index).animate({
        opacity:1
    })
})
var timer
// 自动轮播
function fn(){
    timer=setInterval(function(){
        $(".slider-img>li").css({
            opacity:0,
        })
      
        index=index+1
        if(index==4){
            index=0
        }
       bn()
        $(".slider-img>li").eq(index).animate({
            opacity:1
        })
    },2000)
}
// 点亮圆点
function bn(){
    $(".slider-circle>li").css({
        backgroundColor:"",
    })
    $(".slider-circle>li").eq(index).css({
        backgroundColor:"blue",
    })
}
fn()
// 鼠标移入，停止自动轮播
$("#slidershow").mouseenter(function(){
  clearInterval(timer)
})
// 鼠标移出开始轮播
$("#slidershow").mouseleave(function(){
    clearInterval(timer)
    fn()
})

// raound 周边轮播区域 next区域
var i=5
$(".banner-around-next").click(function(){
    for(var j=0;j<6;j++){
     var oLeft=$("#banner-con>.banner-around>.banner-around-main>ul>li").eq(j).position().left
         $("#banner-con>.banner-around>.banner-around-main>ul>li").eq(j).css({
            left:276+oLeft
        })
    }
    $("#banner-con>.banner-around>.banner-around-main>ul>li").eq(i).css({
        left:0
    })
 i--
 if(i<0){
     i=5
 }
})
// raound 周边轮播区域 prev区域
// var i=5
$(".banner-around-prev").click(function(){
    for(var j=0;j<6;j++){
     var oLeft=$("#banner-con>.banner-around>.banner-around-main>ul>li").eq(j).position().left
         $("#banner-con>.banner-around>.banner-around-main>ul>li").eq(j).css({
            left:oLeft-276
        })
    }
    $("#banner-con>.banner-around>.banner-around-main>ul>li").eq(i).css({
        left:828
    })
 i++
 if(i>5){
     i=0
 }
})

// life 居家生活轮播图 next区域
var k=5
$(".banner-house-next").click(function(){
    for(var j=0;j<6;j++){
     var oLeft=$(".banner-life-main>ul>li").eq(j).position().left
         $(".banner-life-main>ul>li").eq(j).css({
            left:276+oLeft
        })
    }
    $(".banner-life-main>ul>li").eq(k).css({
        left:0
    })
 k--
 if(k<0){
     k=5
 }
})

// life 居家生活轮播图 prev区域
$(".banner-house-prev").click(function(){
    for(var j=0;j<6;j++){
     var oLeft=$(".banner-life-main>ul>li").eq(j).position().left
         $(".banner-life-main>ul>li").eq(j).css({
            left:oLeft-276
        })
    }
    $(".banner-life-main>ul>li").eq(k).css({
        left:828
    })
 k++
 if(k>5){
     k=0
 }
})



// mode 手办模型轮播图 next区域
var m=5
$(".banner-mode-next").click(function(){
    for(var j=0;j<6;j++){
     var oLeft=$(".box1>ul>li").eq(j).position().left
         $(".box1>ul>li").eq(j).css({
            left:276+oLeft
        })
    }
    $(".box1>ul>li").eq(m).css({
        left:0
    })
 m--
 if(m<0){
     m=5
 }
})

// mode 手办模型轮播图 prev区域
$(".banner-mode-prev").click(function(){
    for(var j=0;j<6;j++){
     var oLeft=$(".box1>ul>li").eq(j).position().left
         $(".box1>ul>li").eq(j).css({
            left:oLeft-276
        })
    }
    $(".box1>ul>li").eq(m).css({
        left:828
    })
 m++
 if(m>5){
     m=0
 }
})


// equipment 数码外设轮播图 next区域
var n=5
$(".banner-equipment-next").click(function(){
    for(var j=0;j<6;j++){
     var oLeft=$(".box2>ul>li").eq(j).position().left
         $(".box2>ul>li").eq(j).css({
            left:276+oLeft
        })
    }
    $(".box2>ul>li").eq(n).css({
        left:0
    })
 n--
 if(n<0){
     n=5
 }
})

// equipment 数码外设轮播图 prev区域
$(".banner-equipment-prev").click(function(){
    for(var j=0;j<6;j++){
     var oLeft=$(".box2>ul>li").eq(j).position().left
         $(".box2>ul>li").eq(j).css({
            left:oLeft-276
        })
    }
    $(".box2>ul>li").eq(n).css({
        left:828
    })
 n++
 if(n>5){
     n=0
 }
})

// pendant 配饰挂件轮播图 next区域
var h=5
$(".banner-pendant-next").click(function(){
    for(var j=0;j<6;j++){
     var oLeft=$(".box3>ul>li").eq(j).position().left
         $(".box3>ul>li").eq(j).css({
            left:276+oLeft
        })
    }
    $(".box3>ul>li").eq(h).css({
        left:0
    })
 h--
 if(h<0){
     h=5
 }
})

// pendant 配饰挂件轮播图轮播图 prev区域
$(".banner-pendant-prev").click(function(){
    for(var j=0;j<6;j++){
     var oLeft=$(".box3>ul>li").eq(j).position().left
         $(".box3>ul>li").eq(j).css({
            left:oLeft-276
        })
    }
    $(".box3>ul>li").eq(h).css({
        left:828
    })
 h++
 if(h>5){
     h=0
 }
})


// clothes 服装服饰轮播图 next区域
var g=5
$(".banner-clothes-next").click(function(){
    for(var j=0;j<6;j++){
     var oLeft=$(".box4>ul>li").eq(j).position().left
         $(".box4>ul>li").eq(j).css({
            left:276+oLeft
        })
    }
    $(".box4>ul>li").eq(g).css({
        left:0
    })
    g--
 if(g<0){
    g=5
 }
})

// clothes 服装服饰轮播图 prev区域
$(".banner-clothes-prev").click(function(){
    for(var j=0;j<6;j++){
     var oLeft=$(".box4>ul>li").eq(j).position().left
         $(".box4>ul>li").eq(j).css({
            left:oLeft-276
        })
    }
    $(".box4>ul>li").eq(g).css({
        left:828
    })
    g++
 if(g>5){
    g=0
 }
})


// book 图书文具轮播图 next区域
var a=5
$(".banner-book-next").click(function(){
    for(var j=0;j<6;j++){
     var oLeft=$(".box5>ul>li").eq(j).position().left
         $(".box5>ul>li").eq(j).css({
            left:276+oLeft
        })
    }
    $(".box5>ul>li").eq(a).css({
        left:0
    })
    a--
 if(a<0){
    a=5
 }
})

// book 图书文具轮播图 prev区域
$(".banner-book-prev").click(function(){
    for(var j=0;j<6;j++){
     var oLeft=$(".box5>ul>li").eq(j).position().left
         $(".box5>ul>li").eq(j).css({
            left:oLeft-276
        })
    }
    $(".box5>ul>li").eq(a).css({
        left:828
    })
    a++
 if(a>5){
    a=0
 }
})


// 回到顶部代码
$(window).scroll(function(){
    //  jQuery对象上有一个scrollTop()方法，返回元素滚动的距离
    // jQuery 将页面的滚动默认为了html元素
     if( $('html').scrollTop()>0){
         $('.menu>li:nth-child(4)').css({
             opacity:1
         })
     }else if($('html').scrollTop()<=0){
         $('.menu>li:nth-child(4)').css({
             opacity:0
         })
     }
 })

$('.menu>li:nth-child(4)').click(function(){
    $("html").animate({
        scrollTop:0
    })
})

// 头部菜单栏展开和收起动画效果

$(window).scroll(function(){
    if( $('html').scrollTop()>220){
         $(".nav-colum").slideDown(1000)
    }
    if( $('html').scrollTop()<=220){
        $(".nav-colum").slideUp(1000)
   }
})

$('.around-img').css({
    width:260,
    height:360,
})
// 从数据库获取数据，渲染 最新周边区域
// $('around-img')

// $.ajax({
//     url:"http://localhost/php/bmall.php",
//     type:"get",
//     dataType:"json",
//     success:function(res){
//         console.log(res)
//         for(var i=0;i<res.length;i++){
//             console.log($('.around-img').eq(i))
//             $('.around-img').eq(i).attr("src","../images/details_img/"+res[i]["product_imglist-01"])  
//             $(".shortname").eq(i).html(`${res[i].product_name_short}`)
//             $(".price").eq(i).html(`${res[i].product_price}`)
//         }
//     },
//     error:function(res){
//         alert("请求失败")
//     }
// })

// ../images/details_img/${res[i].product_imglist-01}

$('.around').click(function(){
    console.log(123)
    // console.log($(this).index())
    window.open("../details.html?"+$(this).index())
})


$(".fun_msg").css({display:"none"})
$(".advice").css({display:"none"})
$(".fun_msg").slideDown(2000)
$(".advice").slideDown(2000)




// 获取地址栏用户名显示再登录处
// console.log(location.href.split("?")[1])
if(location.href.split("?")[1]){
    var str=decodeURIComponent(location.href.split("?")[1])
   $(".denglu").html(str)
}

// 倒计时功能
function _fresh()
{
    var endtime=new Date("12 31, 2020 15:59:00");
    var nowtime = new Date();
    var leftsecond=parseInt((endtime.getTime()-nowtime.getTime())/1000);
    if(leftsecond<0){leftsecond=0;}
    __d=parseInt(leftsecond/3600/24);
    __h=parseInt((leftsecond/3600)%24);
    __m=parseInt((leftsecond/60)%60);//2008-3-12改正，原来将60写成24了
    __s=parseInt(leftsecond%60);
    document.getElementById("_lefttime").innerHTML=__d+"天"+__h+"小时"+__m+"分"+__s+"秒";
}
_fresh()
setInterval(_fresh,1000);	