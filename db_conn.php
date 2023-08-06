<?php
$dbhost="localhost";
$dbuser="root";
$dbpass="";
$dbname="ods_db";

try{
    $conn=mysqli_connect("$dbhost","$dbuser","$dbpass","$dbname") or
    die(" Could not connect to mysql");
}
catch(Exception $e)
{
    echo $e->getMessage();
}


?>
