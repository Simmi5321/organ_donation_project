<?php
header("Access-Control-Allow-Origin:*");
require'db_conn.php';
$dname=$_POST["dname"];
$gen=$_POST["Gender"];
$age=$_POST["age"];
$cnum=$_POST["cnum"];
$email=$_POST["email"];
$adr=$_POST["adr"];
$oname=$_POST["oname"];
$sbg=$_POST["sbg"];
$result=mysqli_query($conn,"insert into donar_reg(dname,gender,age,cnum,eid,adr,oname,sbgr)
 values ('$dname','$gen','$age','$cnum','$email','$adr','$oname','$sbg')");
if($result)
{
    echo 1;
}
else{
    echo 0;
}
?>


