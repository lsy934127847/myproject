<?php
include "./base.php";

// 建立连接
$conn=mysqli_connect("127.0.0.1","root","root","product");
$sql="SELECT * FROM `product_list` WHERE `id`!=0";
$res=mysqli_query($conn,$sql);
$date=mysqli_fetch_all($res,MYSQLI_ASSOC);

//  将php数组转换为json对象
$json=json_encode($date);

// echo $json;
print_r($json);
?>