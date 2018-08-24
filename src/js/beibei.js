jQuery(function($){
// require.config({
//     paths:{
//         'jquery':'jquery-3.2.1',
//         'html':"beibei"
        
//     }
// })

// require(["jquery","html"],function(){

// })
    
    
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

    $(".nav-b .container ul").on("mouseover","li",function(){
        $(this).addClass('borderB').siblings().removeClass('borderB');
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
            a.css({'position':'fixed','top':'0px','z-index':'333','background':"#fff",'height':'40px','line-height':'55px'})
            }
            else{
              a.css({'position':'absolute','top':'157px','right':'80px','height':'33px','line-height':'33px'})
              }
         })
      });
     show($(".main-c-l"))
     function show(ele){
        // let mainCL= $(".main-c-l");
        let status=[200,304];
        // console.log(ele)
        var xhr=new XMLHttpRequest();

        xhr.onload=function(){
            if(status.indexOf(xhr.status)>=0){
                var dd=JSON.parse(xhr.responseText);

                var ul = document.createElement("ul");
                ul.className="uu";

                ul.innerHTML=dd.map((item,idx)=>{
                  return `<li class="crtl"><a href="../html/goodslist.html"><img src=${item.img} class="add2cart"><span>${item.name}</span></a><p>￥${item.price}</p><strong>${item.Discount}</strong></li>` 
                }).join("")
                ele.html(ul)
               
            }
            var shu = 1;
            var shop = []
            $('.crtl').on('click',function(){
              var ddidx = $(this).index();
              var data = dd[ddidx]
                if(data.id == data.id){
                data.regtime++
                console.log(data)
              }
             
              // dd[shu]=shu
              shop.push(data)

              document.cookie= JSON.stringify(shop )
                          })




            let goods = $(".uu");
            console.log($('.namm'))
            // $('.namm').on('mouseover',function(){
            //   console.log(123)
            // })
       
        }
        xhr.open("get","../api/beibei.php");
        xhr.send();

        

     };
     
     let ification_sub=$(".ification-sub");
     $(".ification").on("mouseover",function(){
        $(".ification-sub").css({"display":"block"})
     })
     $(".ification-sub").on("mouseover",function(){
        $(".ification-sub").css({"display":"block"})
     })
     $(".ification-sub").on("mouseout",function(){
        $(".ification-sub").css({"display":"none"})
     })
    
     
     $(".c-r").on("mouseover",function(){
       var username=this.innerText
        let status=[200,304];
        // console.log(ele)
        var xhr=new XMLHttpRequest();
        xhr.onload=function(){
            if(status.indexOf(xhr.status)>=0){
                var data = JSON.parse(xhr.responseText);
                var ul = document.createElement("ul");

                ul.innerHTML=data.map((item,idx)=>{
                  return `<li class="crtl"><a href="../html/goodslist.html"><img src=${item.img} class="add2cart"><span>${item.name}</span></a><p>￥${item.price}</p></li>` 
                }).join("")
                $(".main-c-rb").html(ul)

            }
        
        }
        xhr.open("get","../api/cr.php?username="+username,true);
        xhr.send();
        
     });

     $(".namm").on("mouseover",function(){
       var username=this.innerText
        let status=[200,304];
        console.log(this.innerText)
        var xhr=new XMLHttpRequest();
        xhr.onload=function(){
            if(status.indexOf(xhr.status)>=0){
                var data = JSON.parse(xhr.responseText);
                var ul = document.createElement("ul");

                ul.innerHTML=data.map((item,idx)=>{
                  return `<li class="crtl"><a href="../html/goodslist.html"><img src=${item.img} class="add2cart"><span>${item.name}</span></a><p>￥${item.price}</p></li>` 
                }).join("")
                $(".ification-sub-r").html(ul)

            }
        
        }
        xhr.open("get","../api/cr.php?username="+username,true);
        xhr.send();
        
     })
      
    



});

