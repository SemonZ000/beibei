window.onload=function(){
        var goods = document.getElementsByClassName('goods')[0];

        // 声明一个变量，用于存放所有添加的商品信息
        var goodslist = Cookie.get('goodslist');//'[{},{}..]' 或 ''

        if(goodslist === ''){
            goodslist = []
        }else{
            goodslist = JSON.parse(goodslist);//goodslist必须为json字符串
        }

        // goodslist = JSON.parse(goodslist);//

        // 事件委托
        // 利用事件委托实现添加到购物车的效果
        goods.onclick = function(e){
            // Event对象兼容
            e = e || window.event;

            // 事件源对象兼容
            var target = e.target || e.srcElement;


            // 判断是否点击了添加购物车按钮
            if(target.parentNode.className === 'add2cart'){
                // 获取当前li
                var currentLi = target.parentNode.parentNode;
                var guid = currentLi.getAttribute('data-guid');

                // 判断当前商品是否已经添加过
                // * 已添加：找出这个商品，数量+1
                // * 未添加：创建对象，商量为1，写入数组

                var currentGoods = goodslist.filter(function(g){
                    return g.guid === guid;
                });//[{}]或[]

                if(currentGoods.length>0){
                    // 存在，数量+1
                    currentGoods[0].qty++;
                }else{
                    // 不存在，添加商品

                    // 获取商品信息
                    // 把goods保持外观，存入cookie(只能字符串)：json字符串
                    var goods = {
                        guid:guid,
                        imgurl:currentLi.children[0].src,
                        name:currentLi.children[1].innerText,
                        price:currentLi.children[2].innerText,
                        qty:1
                    }

                    // 当前商品添加到数组
                    goodslist.push(goods);
                }


                

                // Object->json string
                // JSON.stringify()

                // 
                // document.cookie = 'goodslist=' + JSON.stringify(goodslist);
                Cookie.set('goodslist',JSON.stringify(goodslist));
            }
        }
        
    
}