<?php
    include 'first.php';
    header("content-type:text/html;charset=utf-8");
    $username = isset($_GET['username']) ? $_GET['username'] : null; 
    $sql="select * from children where name='$username'";
    $res=$conn->query($sql);
    $data = $res->fetch_all(MYSQLI_ASSOC);
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
   
?>