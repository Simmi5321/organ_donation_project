
<?php
header("Access-Control-Allow-Origin:*");
require'db_conn.php';
$data="";
$ql=mysqli_query($conn,"select * from organ");
while($row=mysqli_fetch_assoc($ql))
{
    if($data!="") 
    {
    $data.=",";
    }
$data.='{
    "oname":"'.$row['oname'].'",
    "quan":"'.$row['qty'].'",
    "img":"'.$row['img'].'",
    "id":"'.$row['id'].'"


    }';
}

$data='{"records":['.$data.']}';
echo ($data);
?>

