<?php
include "./base.php";
// print_r($_GET);
$msg=$_GET["id"]+1;
// echo $msg;

$conn = mysqli_connect('127.0.0.1','root','root','product');
$sql = "SELECT * FROM `product_list` WHERE `id`='$msg'";
$res = mysqli_query($conn,$sql);
$row = mysqli_fetch_all($res,MYSQLI_ASSOC);
mysqli_close($conn);


// $json=json_encode($row);
// print_r($json);
// print_r($row);  
// print_r($row[0]["Id"]);
$res1=$row[0]["id"];
$res2=$row[0]["product_name"];
$res3=$row[0]["product_bigimg-01"];
$res4=$row[0]["product_price"];
$res5=$_GET["num"];
// $row["id"] $row["product_name"] $row["product_price"] $row["product_bigimg-01"]

$conn1 = mysqli_connect('127.0.0.1','root','root','myshop');
$sql1 = "INSERT INTO `cart` VALUES ('$res1','$res2','$res3','$res4','$res5')";
$res5 = mysqli_query($conn1,$sql1);
// $row = mysqli_fetch_all($res,MYSQLI_ASSOC);
mysqli_close($conn1);
// $json=json_encode($row);
// print_r($row);


?>