<?php
header("Access-Control-Allow-Origin:*");
$request=json_decode(file_get_contents("php://input"));

if(isset($request) && !empty($request))
{
    $nps=$request->nps;
    $cps=$request->cps;
    if($nps==$cps)
    {
       require 'db_conn.php';
       $result=mysqli_query($conn,"update admin set passw='$nps'");
       if($result)
       {
        echo 1;
       }
       else{
        echo 0;
       }
    }
    else{
        echo 2;
    }
}
