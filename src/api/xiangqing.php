<?php
    include "first.php";
    header("content-type:text/html;charset=utf-8");
    $name = "select * from children";
    $sql=$conn->query($name);
    $row = $sql->fetch_all(MYSQLI_ASSOC);
    echo json_encode($row, JSON_UNESCAPED_UNICODE);


    // $username = isset($_GET['name']) ? $_GET['name'] : null; 
    // $all="select * from beibei WHERE name='username'";
    // $ss=$conn->query($all);
    
?>