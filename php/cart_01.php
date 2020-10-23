<?php
    /* 
    
        删除的sql语句
            ==>就是想用php去删除数据库里面的某些数据
            ==>使用DELETE关键字
            ==>sql语句
                ==>DELETE FROM `表名` WHERE 条件
                ==>要从哪一个表删除条件是什么的数据
    */ 
        // 0 解决中文乱码问题
        include "./base.php";
        $msg=$_GET["id"];
        // 1 建立连接
        $conn = mysqli_connect('localhost','root','root','myshop');

        // 2 执行sql语句
        // 从user表里面删除name是茶杯的那条数据
        $sql = "DELETE FROM `cart` WHERE `product_id`='$msg'";
        // 删除所有年纪小于 19 岁 并且 成绩为 60 分以下的学员
        // $sql = "DELETE FROM `student` WHERE `age`<19 AND `score`<60";
        $res = mysqli_query($conn,$sql);
        
        // 3 删除结果不需要解析结果
        // var_dump($res);

        // 4 断开连接
        mysqli_close($conn)
?>