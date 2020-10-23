<?php

include "../base.php";

$str=file_get_contents("./adddata.json");
$phparr=json_decode($str,true);
print_r($phparr[0]);
echo "<br>";
echo "<br>";

$arr=array("product_name","product_price","product_num","product_imglist-01","product_imglist-02","product_imglist-03","product_imglist-04","product_imglist-05","product_name-short",
                     "product_bigimg-01", "product_bigimg-02", "product_bigimg-03", "product_bigimg-04", "product_bigimg-05");
$i=0;
   // 1 建立连接
   $conn = mysqli_connect('localhost','root','root','product');
   // 2 执行sql语句
//    $name = 'A4纸';
   // 第一种方式的时候,必须要完全按照数据里面的字段数量添加
//    foreach()
$j=1;
   foreach($phparr as $value){
       $sql1 = "INSERT INTO `product_list` (`$arr[$i]`) VALUES ('1')";
        $res1 = mysqli_query($conn,$sql1);
     foreach($value as $key=>$val){
        $sql  = "UPDATE `product_list` SET `$arr[$i]`='$val' WHERE `id`=$j";
        $res = mysqli_query($conn,$sql);
        $i=$i+1;    
    }
    $i=0;
    $j=$j+1;
    echo "<br>";
}
//    $sql = "INSERT INTO `products_list` VALUES (null,'$name',30)";
   // 第二种方式的时候,字段和数据库里面不匹配的时候会报错
   // $sql = "INSERT INTO `user` (`name`) VALUES ('$name')";

   // 3 插入不需要解析结果
   var_dump($res);
   // 4 断开连接
   mysqli_close($conn);

?>