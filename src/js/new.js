jQuery(function($){
    http.get('../src/index.php').then(function(res){

        if(res){
            var wrt  = window.opener.document.getElementsByClassName('den')[0].innerText;
            var wrt2  = window.opener.document.getElementsByClassName('zhu')[0].innerText;
                $('.den1').html(wrt)
            $('.zhu1').html(wrt2)
        }else{
            $('.zhu1').html('注册')
        }

    })


    $(function () {
        $('.car').on('click', function () {
            http.get('../src/index.php').then(function(res){
                if(res){
                    window.open('../src/listcar.html')
                }else{
                    alert('请登录');
                    window.open('../src/login.html')
                }
            })
        })
        //ajax
        // console.log(213)
      

        function puu() {
            http.post('/src/goodslist.php', {}).then(function (res) {
                var res = window.eval('(' + res + ')');
                var list = res.map(function (item) {
                    return '<li class="fl tz">' + '<a href="javascript:">' + '<img class="tz2" src="'+item.tupian+'">' + '<p class="pa">￥' + item.jiage + '</p>' + '<p class="pb">' + item.name + '</p>' + '<p class="pc">' + item.stroe + '</p>' + '<p class="ziy">' + '<span class="zy">' + '自营' + '</span>' + '</p>' + '</a>' + '<div class= add_hover>' + '<a href="jquery:" class="adds">' + '加入收藏' + '</a>' + '<a href="jquery:" class="addc">' + '加入购物车' + '</a>' + '</div>' + '</li>'
                })
                $('.shangpp').append(list)
                var tz = document.getElementsByClassName('pb');
                var tz2 = document.getElementsByClassName('tz2');
                var tz3 = document.getElementsByClassName('pa');
                var addc = document.getElementsByClassName('addc');

                for (var i = 0; i < tz.length; i++) {
                    var a = tz[i];
                    var b = addc[i]
                    b.index = i;
                    a.index = i;
                    tz[i].onclick = function () {
                        var sul = res[this.index];
                        console.log(sul)
                        sul = JSON.stringify(sul);
                        window.localStorage.setItem('wo', sul);
                        window.open('../src/goods.html')
                    }
                    tz2[i].onclick = function () {
                       
                        window.open('../src/goods.html')
                    }
                    tz3[i].onclick = function () {
                       
                        window.open('../src/goods.html')
                    }
                    var ar = [];
                    addc[i].onclick = function () {
                        var sul = res[this.index];
                        ar.push(sul);
                        // console.log(ar)
                        document.cookie = 'goodslist=' + JSON.stringify(ar);
                        alert('加入购物成功')
                    }
                }




            }).catch(function (error) {
                console.log(error);
            })
        }
        puu()



        // var pb = document.getElementsByClassName('pb');
        // console.log(pb)
        // for(var i = 0;i<pb.length;i++){
        //     pb[i].onclick = function(){
        //         console.log(123)
        //     }
        // }



        var btn = $('.btn_s');
        btn.on('click', function () {
            function pu() {
                http.post('/src/goodslist.php', {}).then(function (res) {
                    // window.location.herf ='../src/login.html'
                    window.open('../src/search.html')
                    var res = window.eval('(' + res + ')');
                    var list = res.map(function (item) {
                        return '<li class="fl">' + '<a href="jquery:">' + '<img src="' + item.tupian + '">' + '<p class="pa">￥' + item.jiage + '</p>' + '<p class="pb">' + item.name + '</p>' + '<p class="pc">' + item.stroe + '</p>' + '<p class="ziy">' + '<span class="zy">' + '自营' + '</span>' + '</p>' + '</a>' + '<div class= add_hover>' + '<a href="jquery:" class="adds">' + '加入收藏' + '</a>' + '<a href="jquery:" class="addc">' + '加入购物车' + '</a>' + '</div>' + '</li>'
                    })
                    // console.log(list)
                    $('.shangpp').append(list)
                }).catch(function (error) {
                    console.log(error);
                })
            }
            pu()
        })
})