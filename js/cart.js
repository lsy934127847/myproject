// var num=location.href.split("?")[2]
var index=location.href.split("?")[1]
// var resarr=[]
$.ajax({
    url:"../php/cart.php",
    data:{id:index},
    dataType:"json",
    success:function(res){
        console.log(res)
        // resarr=res

        for(var g=0;g<res.length;g++){

           
            $('.product').append(`
            <ul class="product_list clearfloat">
            <li class="box-01"><input type="checkbox"  class="seclect"></li>
            <li class="massage box-02">
                <img src="./images/details_img/${res[g]["product_bigimg"]}" alt="" class="img">
                <p class="name">${res[g].product_name}</p>
            </li>
            <li class="box-03">
                <span>￥</span>
                <span class="price">${res[g].product_price}</span>
            </li>
            <li class="box-04">
                <div class="jian" index="${res[g].product_id}">-</div>
                <div><input type="text" class="num" value="${res[g].product_num}"></div>
                <div class="add" index="${res[g].product_id}">+</div>
            </li>
            <li class="box-05">
                <span>￥</span>
                <span class="total">${res[g].product_price}</span>
            </li>
            <li>
                <button class="del" index="${res[g].product_id}">删除</button>
            </li>
        </ul>
            `)
        
         
        }
        fn()
        
      
       
    },
    error:function(){
        alert("请求失败")
    }
})



// 点击删除商品

function fn(){
    // 点击删除商品同时清楚数据库里的东西
    $('.del').click(function(){
        var index= $(this).attr("index")
        // $(this).parent().parent().css({
        //     display:"none",
        // })
        $(this).parent().parent().remove()
      
        select()
        sec_price()
        $.ajax({
            url:"../php/cart_01.php",
            data:{id:index},
            type:"get",
            // dataType:"json",
            success:function(res){
                alert("删除成功，请查看数据库是否删除成功")
                alert("查询时建议点localhost刷新或者关掉再次打开")
                
            },
            error:function(){
                alert("请求失败")
            }
        })
    })

    var i=0

    $(".add").click(function(){
        // var index=$('.add')
        $(this).prev().children()[0].value= parseInt($(this).prev().children()[0].value)+1
    
        // 找到this的父亲的上一个兄弟的符合条件的儿子
        // console.log( $(this).parent().prev().children(".price")[0])

        // 同步数据库
        function change_database(){    
            $.ajax({
                url:"../php/change.php",
                data:{id:index,num:value},
                // dataType:"json"
                success:function(res){
                   console.log("同步数据库成功")
                },
                error:function(){
                    alert("请求失败")
                }
            })
        }

        var index= $(this).attr("index")
        console.log(index)
        var value=$(this).prev().children()[0].value
        console.log(value)
        change_database()


       var price= parseInt($(this).parent().prev().children(".price").html())
    //  
       console.log(price)
       var total=parseInt(  $(this).prev().children()[0].value)*price
    //    找到this的父亲的下一个兄弟的符合条件的儿子
    // $(this).parent().next().children(".total")
    $(this).parent().next().children(".total").html(total)
    
    sec_price()
    })
    $(".jian").click(function(){
    
        // 找到this下一个兄弟
        // $(this).next().children()[0]
        if(parseInt( $(this).next().children()[0].value)==1){
            $(this).next().children()[0].value=1
        }else{
            $(this).next().children()[0].value= parseInt($(this).next().children()[0].value)-1
        }
    

        // 同步数据库
        function change_database(){    
            $.ajax({
                url:"../php/change.php",
                data:{id:index,num:value},
                // dataType:"json"
                success:function(res){
                   console.log("同步数据库成功")
                },
                error:function(){
                    alert("请求失败")
                }
            })
        }
        var index= $(this).attr("index")
        var value= $(this).next().children()[0].value
        change_database()

        // 找到this的父亲的上一个兄弟的符合条件的儿子
        var price= parseInt($(this).parent().prev().children(".price").html())
        //    console.log(price)
           var total=parseInt( $(this).next().children()[0].value)*price
           // 找到this的父亲的下一个兄弟的符合条件的儿子
           $(this).parent().next().children(".total").html(total)
           sec_price()
    })
    var i=0
    // 选中商品计算金额
    // 点击一次选中框
    $('.seclect').click(function(){
        i=i+1
        // console.log($('.seclect').prop("checked"))
        // console.log($('.seclect').prop("checked")==true)
        if($('.seclect').prop("checked")==true){
            i=i+1
          $('.total_price').html(parseInt($('.total').html()))
        }else {
            $(".total_num").html("0")
        }
    
        // 计算选中的总价格
        sec_price()
        // 计算商品数量
        select()
    })
    
    function sec_price(){
        var sec_price=0
        for(var i=0;i<$('.seclect').get().length;i++){
            if($('.seclect').eq(i).prop("checked")){
                sec_price =sec_price+ parseInt($(".total").eq(i).html()) 
            }
        }
        $('.total_price').html(sec_price)
    }
    // 每点击一次选中框添加class类名
    // 通过此类名获取jquery对象 在获取
    // 用以记录选中了多少个商品
    
    // 循环判断有多少商品被选中
    function select(){
        var j=0
    //    console.log($('.seclect').get())
    // console.log("del")
    $('.seclect').get().length
       for(var i=0;i<$('.seclect').get().length;i++){
           if($('.seclect').eq(i).prop("checked")){
               j=j+1
           }
       }
       console.log(j)
       $('.total_num').html(j)
    }
    select()

}

$(".fun_msg").css({display:"none"})
$(".advice").css({display:"none"})
$(".fun_msg").slideDown(2000)
$(".advice").slideDown(2000)



function change_database(){ 
    console.log(value)
    $.ajax({
        url:"../php/change.php",
        data:{id:index,num:value},
        // dataType:"json"
        success:function(res){
           console.log("同步数据库成功")
        },
        error:function(){
            alert("请求失败")
        }
    })
}
