jQuery(function($){
    // console.log($(".main-c-l"))
    // let goods = document.cookie;
    // console.log(goods)
    // console.log($(".main-c-l img"))
    var shoping = localStorage.getItem("data")
    var shop = window.eval('('+shoping+')');
    var goods = document.getElementsByClassName("goods")[0];
    console.log(goods)
    var img = document.createElement("img");
    img.setAttribute("src",shop.img);
    img.setAttribute("data-big",shop.img);
    goods.appendChild(img)
    console.log(shop)
    console.log(shop.img)
    // console.log(shop)
    // $(".goods").html(<img src=${shop.img} data-big=${shop.img}>)
    $('.goods').lxzoom({width:400,height:400}).addClass('box');
    // var mainRc=document.getElementsByClassName("main-rc")[0]
    // mainRc.innerHTML=shop.map(function(){
    //     return `<h2>shop.name<h2>`
    // })
    //     return `<h2>￥${item.price}</h2><ul><li><span>原价<del>${item.sale}</del></span></li><li><span>节省了:${item.sale-item.price}</span></li></ul>`
    // }).join("")
    var name1 = document.getElementsByClassName("name1")[0]
    var del = document.getElementsByClassName("del")[0]
    var Total = document.getElementsByClassName("Total")[0]
    name1.innerHTML=shop.name;
    del.innerHTML=shop.sale;
    Total.innerHTML=shop.sale-shop.price;


    // var value1 = localStorage.getItem("data")
    // var data = window.eval('('+value1+')')
    // console.log(data)
    // var wq =  document.getElementsByClassName('name')[0]
    // wq.innerHTML = data.name
    // 
    // 
    
        // let status = [200,304];
        // let xhr = new XMLHttpRequest();

        // xhr.onload=function(){
        //   if(status.indexOf(xhr.status)>=0){
        //     var data = JSON.parse(xhr.responseText);

        //     $(".goods").html(shop.map(item=>{
        //         return `<img src=${item.img} data-big=${item.img}>`
        //     }).join(""))
        //     $('.goods').lxzoom({width:400,height:400}).addClass('box');

        //     $(".main-rc").html(shop.map(item=>{
        //     return `<h2>￥${item.price}</h2><ul><li><span>原价<del>${item.sale}</del></span></li><li><span>节省了:${item.sale-item.price}</span></li></ul>`
        //     }).join(""))
        //   }
        // }

        // xhr.open("get","../api/ification-sub.php",true);
        // xhr.send();
})
    