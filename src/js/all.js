jQuery(function($){

    let navB = $(".nav-b .container ul");
    console.log(navB)
    let toTop = $(".toTop")
    $(function(){
        var a = $('.nav-b .container'),
        
        b =a.offset();
        $(document).on('scroll',function(){
          var c = $(document).scrollTop();
        // a.addClass("suctionTop")
          if(b.top<=c){
            a.css({'position':'fixed','top':'0px','z-index':'333','background':"#fff",'height':'40px','line-height':'55px'})

            }
            else{
              a.css({'position':'absolute','top':'157px','right':'80px','height':'33px','line-height':'33px'})
              }
         })
      });

    $(".convenient-r").on("mouseover","li",function(){

        $(this).addClass('liRed').siblings().removeClass('liRed');
    })

    $(".nav-left").on("mouseover","li",function(){
        $(this).addClass('liRed').siblings().removeClass('liRed');
    })

    $(".nav-b .container ul").on("mouseover","li",function(){
        $(this).addClass('borderB').siblings().removeClass('borderB');
    })


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
})