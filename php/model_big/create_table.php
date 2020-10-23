<?php
require('./_connect.php');

//书写sql语句
$sql = "CREATE TABLE product_list (
			id INT primary key AUTO_INCREMENT NOT NULL ,
			product_name VARCHAR(300) NOT NULL,
			product_price VARCHAR(300) NOT NULL,
			product_num  VARCHAR(300) NOT NULL,
			`product_imglist-01` VARCHAR(300) NOT NULL,
			`product_imglist-02` VARCHAR(300) NOT NULL,
			`product_imglist-03` VARCHAR(300) NOT NULL,
			`product_imglist-04` VARCHAR(300) NOT NULL,
			`product_imglist-05` VARCHAR(300) NOT NULL,
			`product_name-short` VARCHAR(300) NOT NULL,
			`product_bigimg-01` VARCHAR(300) NOT NULL,
			`product_bigimg-02` VARCHAR(300) NOT NULL,
			`product_bigimg-03` VARCHAR(300) NOT NULL,
			`product_bigimg-04` VARCHAR(300) NOT NULL,
			`product_bigimg-05` VARCHAR(300) NOT NULL
			
	
			-- submission_date TIMESTAMP	
)";
$result = mysqli_query($conn,$sql);
if($result){
	echo "数据表创建成功";
}else{
	echo "数据表创建失败";
}

?>