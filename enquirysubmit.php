<?php
header("Access-Control-Allow-Origin:*");
require'db_conn.php';
$name=$_POST["name"];
$city=$_POST["city"];
$cnum=$_POST["cnum"];
$email=$_POST["email"];
$query=$_POST["query"];
$dt=date("d-m-Y");

$result=mysqli_query($conn,"insert into enquiry(name,city,cnum,email,query,dt)
 values ('$name','$city','$cnum','$email','$query','$dt')");
if($result)
{
    echo 1;
}
else{
    echo 0;
}
?>

