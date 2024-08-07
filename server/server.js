/**
 * Created by Administrator on 2016/10/9.
 */
$(function(){
    $(".server-2-1 h2").fadeIn(400);
    $(".server-2-1 h2").animate({"marginTop":"0px"},600);
    $(".server-2-1 p").animate({"marginTop":"10px"},900).fadeIn(1000);
    $(".sve-1-1").animate({"marginTop":"10px"},900).fadeIn(1000);
    $(window).scroll(function(){
        var h=$(this).scrollTop();
        console.log(h);
        if(h>=200 && h<300){
            $(".sve-1-2").animate({"marginTop":"10px"},600).fadeIn(700);
            //$('.body-2-1').fadeIn().animate({"marginLeft":"100px"},1000);
            //$('.body-2-2').fadeIn().animate({"marginRight":"200px"},1000);
        }
        if(h>=500 && h<900){
            $('.server-3-1 h2').fadeIn(1000);
            $(".server-3-1 p").fadeIn(1000);
            $('.pho-1').fadeIn(2000);
        }
        if(h>=1000){
            $('.footer-1').fadeIn(1000);
        }
    });


})

