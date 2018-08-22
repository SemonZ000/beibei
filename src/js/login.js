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

        
})