<?php
    include "D.php";

    $username = $_POST["username"];
    $pwd = $_POST["password"];

    $sql = "select * from users where username = '$username' and password = '$pwd';";
    $array = query($sql);
    if(count($array) > 0){
        echo '{"state": true}';
        session_start();
        $_SESSION["username"] = $username;//session_id
    } else{
        echo '{"state": false, "message": "login fail!"}';       
    }
?>