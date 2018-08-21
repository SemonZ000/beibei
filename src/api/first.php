<?php
        $servername = 'localhost';
        $username = 'root';
        $password = '';
        $dbase = 'h5_1804';

        //连接数据库
        $conn = new mysqli($servername,$username,$password,$dbase);
        // 检测连接
        
        if($conn->connect_error){
            die('连接失败'.$conn->connect_error);
        }

        $conn->set_charset('utf8');
        return $conn;
        
       
?>