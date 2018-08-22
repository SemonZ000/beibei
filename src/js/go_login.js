document.addEventListener('DOMContentLoaded',()=>{
            let username = document.querySelector('.username');
            let password = document.querySelector('.password');
            let btnReg = document.querySelector('.btn');
            console.log(username,password,btnReg)
            let status = [200,304];

            btnReg.onclick=function(){
                let _username=username.value;
                var _password=password.value;
                
                username.onblur=function(){
                
                let xhr = new XMLHttpRequest();

                xhr.onload=function(){
                        if(status.indexOf(xhr.status) >= 0){
                            console.log(xhr.responseText);
                            
                            // 成功：添加has-success类
                            
                        }else{
                            alert("请确认密码帐号")
                        }
                    }

                    xhr.open("get","../api/check_username.php?username="+_username,true)
                    xhr.send()
                }
                location.href="../index.html"
            };

            
        
})
            
