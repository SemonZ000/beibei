jQuery(function($){
    var shoping = document.cookie
    var shop = window.eval('('+shoping+')')
    console.log(shop)
    let tr=document.createElement("tr");
    tr.className="three";
    tr.innerHTML=shop.map(item=>{
        return `<td><input type="checkbox" class="only"></td><td class="lik"><img src=${item.img}></td><td>${item.name}</td><td>${item.price}</td><td>${item.regtime}</td><td>${item.regtime*item.price}</td><td class="del">删除</td>`
    }).join('')
    $(".tb").html(tr)
   $('.del').on('click',function(){
        $(this).parent().remove()
   })


   //全选反选
   (function(){
        // var del = document.getElementsByClassName("del");
        //        for(var i=0;i<del.length;i++){
        //         del[i].onclick = function(){
        //             var thisDel = this.parentNode.parentNode;
        //             thisDel.parentNode.removeChild(thisDel);
        //             var fir = tbody.children;
        //             for(var i=0;i<fir.length;i++){
        //                 fir[i].children[1].innerText = i+1;
        //             }
        //         }
        //        }


               var input = document.getElementsByTagName("input");
                var input1 = document.getElementsByTagName("input")[0];
                console.log(input1,input)
                input1.onclick = function(){
                for(var i=0;i<input.length;i++){
                            input[i].checked = input1.checked;
                        }
                        
                    }
                
               for(var i=1;i<input.length;i++){
                    input[i].onclick = function(){
                        var thisTd = this.parentNode.parentNode;
                        if(this.checked){
                            thisTd.className = "huang";
                        }
                        else{thisTd.className = "";}
                        input1.checked = isCheckAll();
                    }


               }
               function isCheckAll(){
                var res = true;
                for(var i=1;i<input.length;i++){
                    if(!input[i].checked){
                        res = false;
                        break;
                    }
                }
                return res;
            }
   })();
})

