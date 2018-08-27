<?php
    include "first.php";
    header("content-type:text/html;charset=utf-8");
    $username = isset($_GET['username']) ? $_GET['username'] : null; 
    $sql="select * from beibei where name='$username'";
    $sql=$conn->query($name);
    $row = $sql->fetch_all(MYSQLI_ASSOC);
    echo json_encode($row, JSON_UNESCAPED_UNICODE);
?>