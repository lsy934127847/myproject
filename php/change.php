<?php

/* 
     修改的sql语句
        ==>想用php去操作数据库修改某一条数据的内容
        ==>使用UPDATE关键字
        ==>sql语句
            ==>UPDATE `表名` SET 字段=新值 WHERE 条件
            ==>UPDATE `表名` SET 字段1=新值1,字段2=新值2,字段3=新值3 WHERE 条件
*/
        // 0 解决中文乱码问题
        include "./base.php";
$id=$_GET["id"];
$num=$_GET["num"];
        // 1 建立连接
        $conn = mysqli_connect('localhost','root','root','myshop');

        // 2 执行sql语句
        // 修改user表里面的name是充电宝的商品的price为45;
        // $sql = "UPDATE `user` SET `price`=45 WHERE `name`='充电宝'";
        // 修改user表里面的name是A4纸的商品的price为10,商品名为A3纸;
        // $sql = "UPDATE `user` SET `price`=10,`name`='A3纸' WHERE `name`='A4纸'";
        // 把 id 大于 950 的同学的成绩修改为 100 分

        // 将id对应商品的数量同步
        $sql = "UPDATE `cart` SET `product_num`='$num' WHERE `product_id`='$id'";
        $res = mysqli_query($conn,$sql);
        
        // 3 修改结果不需要解析结果
        // var_dump($res);

        // 4 断开连接
        mysqli_close($conn)
?>