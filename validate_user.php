<?php
header("Access-Control-Allow-Origin:*");
$request=json_decode(file_get_contents("php://input"));

if(isset($request) && !empty($request))
{
    $uname1=$request->uname;
    $passw1=$request->passw;
    require'db_conn.php';
    $result=mysqli_query($conn, "select * from admin where uname='$uname1' and passw='$passw1'");
    $found=mysqli_num_rows($result);
        if($found==1){
    echo 1;
}
else
{
    echo 0;


}
}
?>