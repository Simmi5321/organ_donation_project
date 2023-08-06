
<?php
header("Access-Control-Allow-Origin:*");
require'db_conn.php';
$q1=mysqli_query($conn,"select * from donar_reg");
$ndnr=mysqli_num_rows($q1);

$q2=mysqli_query($conn,"select * from receiver_reg");
$nrvr=mysqli_num_rows($q2);


$q3=mysqli_query($conn,"select * from enquiry");
$nenq=mysqli_num_rows($q3);


$q4=mysqli_query($conn,"select * from organ");
$norg=mysqli_num_rows($q4);

$data='{"records":{
    "ndnr":"'.$ndnr.'",
    "nrvr":"'.$nrvr.'",
    "nenq":"'.$nenq.'",
    "norg":"'.$norg.'"
}}';
echo ($data);
?>

