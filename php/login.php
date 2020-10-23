<?php
include "./base.php";
$uname=$_GET["uname"];
$upass=$_GET["upass"];

// print_r($uname)

$conn = mysqli_connect('127.0.0.1','root','root','user');
$sql = "SELECT * FROM `user_list` WHERE `username`='$uname' AND `userpass` = '$upass'";
$res = mysqli_query($conn,$sql);
$data = mysqli_fetch_all($res,MYSQLI_ASSOC);
mysqli_close($conn);
$json=json_encode($data);
print_r($json);

// `username`='$uname' AND `userpass`=$upass'
?>