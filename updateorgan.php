<?php
header("Access-Control-Allow-Origin:*");
$request=json_decode(file_get_contents("php://input"));
$oid=$request->id;
$oname=$request->oname;
$qty=$request->qty;

require'db_conn.php';

       $result=mysqli_query($conn,"update organ set oname='$oname', qty='$qty' where id='$oid'");
       if($result)
       {
        echo 1;
       }
       else{
        
        echo 0;
       }

   