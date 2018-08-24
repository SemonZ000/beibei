document.addEventListener('DOMContentLoaded',()=>{
            let username = document.querySelector('.username');
            let password = document.querySelector('.password');
            let btnReg = document.querySelector('.btn');
            console.log(username,password,btnReg)
            let status = [200,304];

            username.onblur=function(){
                
                var _password=password.value;
                
                btnReg.onclick=function(){
                let _username=username.value;
                let xhr = new XMLHttpRequest();

                xhr.onload=function(){
                        if(status.indexOf(xhr.status) >= 0){
                            var data= xhr.responseText;
                           if(data="yes"){
                             location.href="../index.html"
                         }else{
                            alert("失败")
                         }
                            // 成功：添加has-success类
                            
                        }
                    }

                    xhr.open("get","../api/check_username.php?username="+_username,true)
                    xhr.send()
                }
                
            };

            
        
})
            
