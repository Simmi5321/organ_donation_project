<?php

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:Access:");
header("Access-Control-Allow-Methods:DELETE");
header("Content-Type:application/json; charset=UTF-8");
header("Access-Control-Allow-Headers:Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

$request=json_decode(file_get_contents("php://input"));

$id=$request->id;
require'db_conn.php';
$ql=mysqli_query($conn,"delete from enquiry where id='$id'");
if($ql)
{
    echo 1;
}
else{
    echo 0;
}
?>
