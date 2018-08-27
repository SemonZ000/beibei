jQuery(function($){
    var shoping = document.cookie
    var shop = window.eval('('+shoping+')')
    console.log(shop)
    let main_tc2=document.getElementsByClassName("main-tc2")[0];
    main_tc2.className="three";
    main_tc2.innerHTML=shop.map(item=>{
      return `<ul><li><input type="checkbox" class="only"></li><li class="lik"><img src=${item.img}></li><li>${item.name}</li><li>${item.price}</li><li>${item.regtime}</li><li>${item.regtime*item.price}</li><li class="del">删除</li></ul>`
    }).join('')


    // var timer = new Date().toUTCString();
    // console.log(timer)
    // var ccc=timer.setDate(timer.getDate()-1)
    // var aa= document.cookie=";expirse="+
    
    // var expire= new Date();
    // var expiresDate.setTime(expire.getTime() + (? * 60 * 1000));
    // //?替换成分钟数如果为60分钟则为 60 * 60 *1000
    // $.cookie("__cookie__", 'helloworld',{
    //   path : '/',
    //   expires : expiresDate
    //  });

    



   $('.del').on('click',function(){
        // var timers = new Date();
        $(this).parent().remove()
        // var aa=document.cookie;
        // document.cookie-
        // document.cookie="username="+""+";expires="+timers;

   })

       var $checkbox = $('.only');
       var $trs = $('.three li');
      $('.allDel').on('click',function(){
          $('.three').remove()
        
          // var timers = new Date();
          // document.cookie="username="+""+";expires="+timers;

      })
        // window.onbeforeunload = function(){
        //     var timerss =new Date();
        //     document.cookie="username="+""+";expires="+timerss;
        // }
      // 全选/不选
      $('.all').click(function(){

        $checkbox.prop('checked',this.checked);
      });


      // 反选
      // $('#btnFx').on('click',function(){
      //   $checkbox.each(function(idx,item){
      //     $(item).prop('checked',!this.checked);
      //     // $trs.eq(idx)[this.checked?'addClass':'removeClass']('selected');
      //   });

      //   checkAll();
      // });


      // 点击任意位置勾选当前行
      // $('.three').on('click','li',function(){
      //   var $currentTr = $(this).closest("input");
      //   $currentTr.toggleClass('liRed');
      //  $currentTr.find('input').prop("checked",$currentTr.hasClass('liRed'))
       
      //   // $currentTr.toggleClass('selected');

      //   // 查找当前tr下的:checkbox
      //   // $currentTr.find('.only').prop('checked');

      //   // checkAll();
      // });

   
})

