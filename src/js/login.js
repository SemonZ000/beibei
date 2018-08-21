jQuery(function($){
        var yzm = $('.yzm');
        var change = $('.change')
        var sj = ''
        var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'm', 'l', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        for (var i = 0; i < 4; i++) {
            sj += arr[parseInt(Math.random() * arr.length)];
        }
        yzm.html(sj);
        change.on('click', function () {
            sj = '';
            for (var i = 0; i < 4; i++) {
                sj += arr[parseInt(Math.random() * arr.length)];
            }
            yzm.html(sj);
        })

        $('.btn').click(function () {
            var _yzm = sj;
            var code = document.querySelector('.check').value;
            http.post('../api/login.php', {
                username: $('#username').val().trim(),
                password: $('#password').val().trim()
            }).then(function (res) {
                var res = window.eval('(' + res + ')')
                console.log(res);
                if (res.state) {
                    if (code == _yzm) {
                        
                        window.location.href = "http://localhost:10088";
                    } else {
                        alert('验证码错误');
                    }

                } else {
                    alert('用户名or密码有误，请重新输入');
                }
            }).catch(function (error) {
                console.log(error);
            })
        })
})