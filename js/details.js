// 发送ajax请求渲染图片
var index=location.href.split("?")[1]

$.ajax({
    // 跨域，当从当前页面利用ajax 取请求另一页面的资源时
    // 只要 协议 域名 端口 有一个不一样就是跨域访问

    url:"http://localhost/php/details.php",
    type:"get",
    data:{id:index},
    dataType:"json",
    success:function(res){
        console.log(res)
        
        $('.bigimg').attr("src",`../images/details_img/${res[0]["product_bigimg-01"]}`)
        $(".left>div:nth-child(2)").append(`
        <img src='../images/details_img/${res[0]["product_bigimg-01"]}' alt="">
        <img src='../images/details_img/${res[0]["product_bigimg-02"]}' alt="">
        <img src='../images/details_img/${res[0]["product_bigimg-03"]}' alt="">
        <img src='../images/details_img/${res[0]["product_bigimg-04"]}' alt="">
        <img src='../images/details_img/${res[0]["product_bigimg-05"]}' alt="">

        `)
        $(".product_name").html(`${res[0]["product_name"]}`)
        console.log($(".product_price"))
        $(".product_price").html(`${res[0]["product_price"]}`)
    },
    error:function(res){
        alert("请求失败")
    }
    
})

// 鼠标移入切换图片
$('.left>div:nth-child(2)').mouseover(function(e){
   var target=e.target
   if(target.tagName == "IMG"){
    $(target).css({
        border: "2px solid black"
       }).siblings().css({
           border:"2px solid #fff"
       })
       $(target).attr("src")
       $(".bigimg").attr("src",$(target).attr("src"))
   }
})


// 最右边点击箭头移动
var index=0
$('.arrow-top').click(function(){
   
    $(".move-00").eq(index).stop().animate({
        top:-460
    })
    index= index+1
    if(index>2){
        index=0
    }
    $(".move-00").eq(index).css({
        top:460
    })
    $(".move-00").eq(index).stop().animate({
        top:0
    })
})
$('.arrow-bottom').click(function(){
    $(".move-00").eq(index).stop().animate({
        top:460
    })
    index= index-1
    if(index<0){
        index=2
    }
    $(".move-00").eq(index).css({
        top:-460
    })
    $(".move-00").eq(index).stop().animate({
        top:0
    })
})

// 放大镜效果
// cover的移动距离(x)/大图的移动距离(?) = 
// cover的横向最大移动距离(pic.offsetWidth-
// cover.offsetWidth)/
// 大图的横向最大距离
// (bImg.offsetWidth-img1.offsetWidth)

// 点击加入购物车，并向数据库传递数据id值用以记录存了什么商品
$('.addcart').click(function(){
    var index=location.href.split("?")[1]
    var num=$('.num')[0].value
    // var num=$('.num').attr("value")
    // location.href="../cart.html?"+index+"?"+num
    window.open("../cart.html?"+index+"?"+num)
    $.ajax({
       url:"../php/details_01.php" ,
       data:{id:index,num:num},
    //    dataType:"json",
       success:function(res){
            //   alert("成功")
            //   console.log(res)
            alert("加入购物车成功，请查看数据库中是否有该条数据")
        
       },
       error:function(){
           alert("请求失败")
       }
    })
})
var num=1
$(".add").click(function(){
    $('.num')[0].value=  parseInt($('.num')[0].value)+1
})

$(".jian").click(function(){
    if(parseInt($('.num')[0].value)==1){
        $('.num')[0].value=1
    }else{
        $('.num')[0].value=  parseInt($('.num')[0].value)-1
    }
    
})


$(".fun_msg").css({display:"none"})
$(".advice").css({display:"none"})
$(".fun_msg").slideDown(2000)
$(".advice").slideDown(2000)

