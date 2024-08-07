/**
 * Created by Administrator on 2016/10/10.
 */
$(function(){
      $(".blog-1-1 img").slideDown(1000);
    $(window).scroll(function(){
        var h=$(this).scrollTop();
        console.log(h);
        if(h>=400 && h<500){
            $(".blog-1-2 img").slideDown(1000);
        }
        if(h>=1200 && h<1500){
            $(".blog-1-3 img").slideDown(1000);
        }
        if(h>=1800){
            $('.footer-1').fadeIn(1000);
        }
    });

})