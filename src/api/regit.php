<?php
    include 'D.php';
    
    $username = $_POST["username"];
    $password = $_POST["password"];
    //判断当前 email 是否已存在数据表中
    $usernamecheck = "select * from users where `username` ='$username'";
    $result = query($usernamecheck);

    //当前 email 不存在，执行插入操作
    if(count($result) < 1){
        $sql = "insert into users(username, `password`) values('$username', '$password')";
        // echo $sql;
        $excute = excute($sql);
        if($excute){
            echo "{state: true}";
        } else {
            echo "{state: false, message: '注册失败'}";
        }
    } else {
        echo "{state: false, message: 'username 已被注册！！！'}";
    }
?>