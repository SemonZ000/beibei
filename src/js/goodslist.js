jQuery(function($){
    // console.log($(".main-c-l"))
    // let goods = document.cookie;
    // console.log(goods)
    // console.log($(".main-c-l img"))
    var shoping = document.cookie
    var shop = window.eval('('+shoping+')')
    $(".goods").html(shop.map(item=>{
        return `<img src=${item.img} data-big=${item.img}>`
    }).join(""))
    $('.goods').lxzoom({width:400,height:400}).addClass('box');

    $(".main-rc").html(shop.map(item=>{
        return `<h2>￥${item.price}</h2><ul><li><span>原价<del>${item.sale}</del></span></li><li><span>节省了:${item.sale-item.price}</span></li></ul>`
    }).join(""))
    // var goodslist = Cookie.get('goodslist');
    
})