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
            a.css({'position':'fixed','top':'0px','background':"#fff",'height':'40px','line-height':'55px'})
            }
            else{
              a.css({'position':'absolute','top':'157px','right':'80px','height':'33px','line-height':'33px'})
              }
         })
      });
     show($(".main-c-l"),"beibei","data")
     function show(ele,res,dd){
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
                  return `<li><a href="../html/goodslist.html"><img src=${item.img}><span>${item.name}</span></a><p>￥${item.price}</p><strong>${item.Discount}</strong></li>` 
                }).join("")
                ele.html(ul)
            }
            // let goods = $(".uu");
            
            // goods.on("click","li",function(){
            //     // let xhr2 = new XMLHttpRequest();
            //     // xhr2.onload=function(){
            //     //   if(status.indexOf(xhr.status)>=0){
            //     //     let data2=JSON.parse(xhr.responseText);
            //     //   }
            //     // }getElementsByTagName("span")[0].
                
            //     // xhr2.open("get","../api/goods.php?username="+username,true);
            //     // xhr2.send();
            //     let img=this.getElementsByTagName("img")[0].src;
            //     let username=this.getElementsByTagName("span")[0].innerHTML;
            //     document.cookie = 'username=' + username ;
            //     document.cookie = 'img=' + img ;
            // })
        }
        xhr.open("get","../api/"+res+".php");
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
    
     
     console.log($(".main-c-r .children"))
  
      $(".main-c-r .children").on("mouseover","li",function(){
            
        })
      
    



})