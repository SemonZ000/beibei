document.addEventListener('DOMContentLoaded',()=>{
            let username = document.querySelector('.username');
            let password = document.querySelector('.password');
            let btnReg = document.querySelector('.btn');
            console.log(username,password,btnReg)
            let status = [200,304];

            let isok = false;

            // 注册
            btnReg.onclick = ()=>{
                //在下面失去焦点判断是否成功，成功则运行，不成则false
                if(!isok){
                    return false;
                }

                // 获取用户名/密码
                let _username = username.value;
                var _password = password.value;

                let xhr = new XMLHttpRequest();
                xhr.onload = ()=>{
                    if(status.indexOf(xhr.status) >= 0){
                        console.log(xhr.responseText);
                        alert("注册成功")
                            // 成功：添加has-success类
                        location.href="../html/go_login.html"
                    }else{
                        alert("注册失败")
                    }
                }
                xhr.open('post','../api/reg.php',true);

                // 设置请求头，以便后端接收post数据
                xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');


                xhr.send(`username=${_username}&password=${_password}`);
            }


            // 验证用户名是否存在
            username.onblur = ()=>{
                let _username = username.value;

                let xhr = new XMLHttpRequest();
                
                xhr.onload = ()=>{
                    if(status.indexOf(xhr.status) >= 0){
                        var formGroup = username.parentNode;
                        if(xhr.responseText === 'yes'){
                            isok = true;
                            
                        }else if(xhr.responseText === 'no'){
                            isok = false;
                            alert("用户名已存在")
                        }
                    }
                }
                xhr.open('get','../api/check_username.php?username='+_username,true);
                xhr.send();

            }
        });