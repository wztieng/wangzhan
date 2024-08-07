
/**
 * Created by Administrator on 2016/10/10.
 */

$(function(){
    $(window).scroll(function(){
        var h=$(this).scrollTop();
        console.log(h);
        if(h>=240 && h<500){
            $('.footer-1').fadeIn(1000);
        }
    });
    $(".cuo-1 h2").fadeIn(800);
    $(".cuo-1 h2").animate({"marginTop":"0px"},600);
    $(".cuo-1 h1").animate({"marginTop":"0px"},900).fadeIn(800);
    $(".cuo-1 p").animate({"marginTop":"10px"},1100).fadeIn(800);
    $(".cuo-1 a").animate({"marginTop":"20px"},1300).fadeIn(800);
})