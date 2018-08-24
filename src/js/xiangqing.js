jQuery(function($){
    show($(".main-c"))
     function show(ele){
        // let mainCL= $(".main-c-l");
        let status=[200,304];
        // console.log(ele)
        var xhr=new XMLHttpRequest();

        xhr.onload=function(){
            if(status.indexOf(xhr.status)>=0){
                var data=JSON.parse(xhr.responseText);

                var ul = document.createElement("ul");
                ul.className="uu";

                ul.innerHTML=data.map((item,idx)=>{
                  return `<li><a href="../html/goodslist.html"><img src=${item.img}><span>${item.name}</span></a><p>￥${item.price}</p><strong>${item.sale}"折"</strong></li>` 
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
        xhr.open("get","../api/xiangqing.php");
        xhr.send();

        

     };


     $(".main-t-l ul").on("click","li",function(){

        $(this).addClass('liRed').siblings().removeClass('liRed');
    });
     $(".main-b ul").on("mouseover","li",function(){

        $(this).addClass('liRed').siblings().removeClass('liRed');
    });
    //  let Price = $(".price")
    //  console.log(Price)
    //  Price.onclick=function(){
    //     function compare(property){
    //         return function(a,b){
    //             var value1 = a[property];
    //             var value2 = b[property];
    //             return value1 - value2;
    //         }
    //     }
    //     jose.sort(compare('price'))
    //     show($(".main-b"),"xiangqing","data")
    // }
})