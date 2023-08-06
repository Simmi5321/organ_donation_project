<?php
header("Access-Control-Allow-Origin:*");
require'db_conn.php';
$data="";
$ql=mysqli_query($conn,"select * from donar_reg");
while($row=mysqli_fetch_assoc($ql))
{
    if($data!="") 
    {
    $data.=",";
    }
$data.='{
    "dname":"'.$row['dname'].'",
    "gender":"'.$row['gender'].'",
    "age":"'.$row['age'].'",
    "cnum":"'.$row['cnum'].'",
    "eid":"'.$row['eid'].'",
    "adr":"'.$row['adr'].'",
    "oname":"'.$row['oname'].'",
    "sbgr":"'.$row['sbgr'].'"
    }';
}

$data='{"records":['.$data.']}';
echo ($data);
?>
