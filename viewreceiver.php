<?php
header("Access-Control-Allow-Origin:*");
require'db_conn.php';
$data="";
$ql=mysqli_query($conn,"select * from receiver_reg");
while($row=mysqli_fetch_assoc($ql))
{
    if($data!="")
    {
    $data.=",";
    }
$data.='{
    "pname":"'.$row['pname'].'",
    "gender":"'.$row['gender'].'",
    "age":"'.$row['age'].'",
    "prob":"'.$row['prob'].'",
    "orequire":"'.$row['orequire'].'",
    "cnum":"'.$row['cnum'].'",
    "adr":"'.$row['adr'].'",
    "hname":"'.$row['hname'].'",
    "sbg":"'.$row['sbg'].'",
    "id":"'.$row['id'].'"

    }';
}

$data='{"records":['.$data.']}';
echo ($data);
?>
