<?php
    include 'connect.php';
    // header("content-type:text/html;charset=utf-8");
    $username = isset($_GET['username']) ? $_GET['username'] : null; 
    $name="select * from beibei WHERE name='$username'";
    $sql=$conn->query($name);
    // $row = $sql->fetch_all(MYSQLI_ASSOC);
    echo json_encode($sql, JSON_UNESCAPED_UNICODE);

?>