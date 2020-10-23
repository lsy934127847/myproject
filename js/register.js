$(".btn>button").click(function(){
  var username= $(".username")[0].value 
   var userpass=$(".userpass")[0].value 
   $.ajax({
       url:"../php/register.php",
       data:{uname:username,upass:userpass},
    //    dataType:"json",
    success:function(){
        alert("注册成功")
    },
    error:function(){
        alert("请求失败")
    }
   })
})