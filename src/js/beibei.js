jQuery(function($){
// require.config({
//     paths:{
//         'jquery':'jquery-3.2.1',
//         'html':"beibei"
        
//     }
// })

// require(["jquery","html"],function(){

// })
    window.onbeforeunload = function(){
        var timers =new Date();
        document.cookie="username="+""+";expires="+timers;
    }
    
    
    let navB = $(".nav-b .container ul");
    console.log(navB)
    let toTop = $(".toTop")
    

    //鼠标划过变色
    $(".convenient-r").on("mouseover","li",function(){

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
                  return `<li class="crtl"><a href="../html/goodslist.html" target="_blank" ><img src=${item.img} class="add2cart"><span class="carName">${item.name}</span></a><p>￥${item.price}</p><strong>${item.Discount}</strong></li>` 
                }).join("")
                ele.html(ul)
               
            }
            var shu = 1;
            var shop = [];
            
            $('.crtl').on('click',function(){
              var timer =new Date();
              var ddidx = $(this).index();
              var data = dd[ddidx]
                if(data.id == data.id){
                data.regtime++
                console.log(data)
              }
               shop.push(data);
               // JSON.stringify(shop)
               // $.cookie('the_cookie',JSON.stringify(shop), { expires: 7 });
               // $.cookie('the_cookie', 'the_value');
              document.cookie="username="+JSON.stringify(shop)+";expires="+timer;
              var a =  localStorage.setItem("data",JSON.stringify(data))
             
          })


       
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
        
     });
      
    $('.shopCar').on('mouseover',function(){
        var shoping = document.cookie
        var shop = window.eval('('+shoping+')')
        let ul =document.createElement('ul');
        ul.innerHTML=shop.map(item=>{
          return `<li><img src=${item.img}> <span>${item.name}<span> <p>￥${item.price}</p></li>`
        }).join("");
        $('.convenient-l .con-car .con-car-c').html(ul)
       
    })
    
     $('.convenient-l .con-car .con-car-c')

     $(".shopCar").on("mouseover",function(){
        $('.convenient-l .con-car').css({"display":"block"})
     })
     $('.convenient-l .con-car').on("mouseover",function(){
        $('.convenient-l .con-car').css({"display":"block"})
     })
     $('.convenient-l .con-car').on("mouseout",function(){
        $('.convenient-l .con-car').css({"display":"none"})
     })




     // $btnSearch.on('click',function(){
     //    var key = $keyword.val();

     //    // 筛选出包含key关键字的tr
     //    // 链式调用
     //    $trs.removeClass('selected').find(':checkbox').prop('checked',false);
     //    $trs.filter(':contains('+key+')').addClass('selected').find(':checkbox').prop('checked',true);
     //  })
     //  
     // $(".crtl").on("click",function(){
        
     // })
});

