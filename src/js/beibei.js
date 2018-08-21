jQuery(function($){
    
    
    
    let navB = $(".nav-b .container ul");
    console.log(navB)
    let toTop = $(".toTop")
   

    //鼠标划过变色
    $(".convenient").on("mouseover","li",function(){

        $(this).addClass('liRed').siblings().removeClass('liRed');
    })

    $(".nav-left").on("mouseover","li",function(){
        $(this).addClass('liRed').siblings().removeClass('liRed');
    })
    
    
    //返回顶部
    toTop.onclick = ()=>{
        let timer = setInterval(()=>{
            // 计算缓冲速度
            let speed = Math.ceil(window.scrollY/5);//1

            scrollBy(0,-speed);


            if(window.scrollY <= 0){
                clearInterval(timer);
            }
        },50)
    }

    //吸顶
     $(function(){
        var a = $('.nav-b .container'),
        b =a.offset();
        $(document).on('scroll',function(){
          var c = $(document).scrollTop();
        // a.addClass("suctionTop")
          if(b.top<=c){
            a.css({'position':'fixed','top':'0px'})
            }
            else{
              a.css({'position':'absolute','top':'157px','right':'80px'})
              }
         })
      });

     $(function(){
        let mainCL= $(".main-c-l");
        let status=[200,304];
        console.log(mainCL)
        let xhr=new XMLHttpRequest();

        xhr.onload=function(){
            if(status.indexOf(xhr.status)>=0){
                let data=JSON.parse(xhr.responseText);

                let ul = document.createElement("ul");
                ul.innerHTML=data.map(item=>{
                        return `<li><a href="../html/goodslist.html"><img src=${item.img}>${item.name}</a><p>${item.price}</p><span>${item.sale}</span><strong>${item.Discount}</strong></li>` 
                }).join("")
                mainCL.html(ul)
            }
        }
        xhr.open("get","../api/beibei.php");
        xhr.send();
     })



})