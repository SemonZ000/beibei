<?php
     include "first.php";
    header("content-type:text/html;charset=utf-8");
    $name = "select * from ification";
    $sql=$conn->query($name);
    $row = $sql->fetch_all(MYSQLI_ASSOC);
    echo json_encode($row, JSON_UNESCAPED_UNICODE);
?>