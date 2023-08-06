<?php
header("Access-Control-Allow-Origin:*");
require'db_conn.php';
$oname=$_POST["oname"];
$qty=$_POST["quan"];
$filename = $_FILES["img"]["name"];
$tmpname = $_FILES["img"]["tmp_name"];
$i=1;
while(file_exists("upload/$filename")){
    $filename = substr($filename,0,strpos($filename,".")).$i.strstr
    ($filename,".");
    $i++;
}
if (move_uploaded_file($tmpname,"upload/$filename")){

}

$result=mysqli_query($conn,"insert into organ(oname,qty,img)
 values ('$oname','$qty','$filename')");
if($result)
{
    echo 1;
}
else{
    echo 0;
}
?>


