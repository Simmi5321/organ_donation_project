

<?php
header("Access-Control-Allow-Origin:*");
require'db_conn.php';
$pname=$_POST["pname"];
$gender=$_POST["gender"];
$age=$_POST["age"];
$prob=$_POST["prob"];
$orequire=$_POST["orequire"];
$cnum=$_POST["cnum"];
$adr=$_POST["adr"];
$hname=$_POST["hname"];
$sbg=$_POST["sbg"];
$result=mysqli_query($conn,"insert into receiver_reg(pname,gender,age,prob,orequire,cnum,adr,hname,sbg)
 values ('$pname','$gender','$age','$prob','$orequire','$cnum','$adr','$hname','$sbg')");
if($result)
{
    echo 1;
}
else{
    echo 0;
}
?>


