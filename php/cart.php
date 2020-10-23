<?php
include "./base.php";
// print_r($_GET);
// $msg=$_GET["id"]+1;
// echo $msg;

$conn = mysqli_connect('127.0.0.1','root','root','myshop');
$sql = "SELECT * FROM `cart` ";
$res = mysqli_query($conn,$sql);
$row = mysqli_fetch_all($res,MYSQLI_ASSOC);
mysqli_close($conn);
$json=json_encode($row);
print_r($json);
?>