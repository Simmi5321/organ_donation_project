<?php
header("Access-Control-Allow-Origin:*");
require 'db_conn.php';

$oid = $_GET["oid1"];
$data="";
$ql = mysqli_query($conn, "select * from organ where id='$oid'");
while ($row = mysqli_fetch_assoc($ql)) {
   if ($data != "") {
      $data .= ",";
   }
   $data .= '{
    "id":"' . $row['id'] . '",
    "oname":"' . $row['oname'] . '",
    "qty":"' . $row['qty'] . '"
    }';
}

echo ($data);
?>