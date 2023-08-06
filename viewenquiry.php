
<?php
header("Access-Control-Allow-Origin:*");
require'db_conn.php';
$data="";
$ql=mysqli_query($conn,"select * from enquiry");
while($row=mysqli_fetch_assoc($ql))
{
    if($data!="") 
    {
    $data.=",";
    }
$data.='{
    "name":"'.$row['name'].'",
    "city":"'.$row['city'].'",
    "cnum":"'.$row['cnum'].'",
    "email":"'.$row['email'].'",
    "query":"'.$row['query'].'",
    "dt":"'.$row['dt'].'",
    "id":"'.$row['id'].'"

    }';
}
$data='{"records":['.$data.']}';
echo ($data);
?>

