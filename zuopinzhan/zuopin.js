/**
 * Created by Administrator on 2016/10/10.
 */
$(function(){
        $(".zuopin-2").fadeIn(600).animate({"width":"31%"},900)
    $(window).scroll(function(){
        var h=$(this).scrollTop();
        console.log(h);
        if(h>=200 && h<495){
            $(".zuopin-3").fadeIn(600).animate({"width":"31%"},900)

        }
        if(h>=520 && h<800){
            $('.footer-1').fadeIn(1000);
        }
    });
    $('.zuopin-2,.zuopin-3').hover(function(){
        $(this).find('img').animate({"width":"380px"},300);
        $(this).find(".mengban").fadeIn("fast");
        $(this).find("input").animate({"width":"70px"},600)

    },function(){
        $(this).find('img').animate({"width":"100%"},300);
        $(this).find(".mengban").css({"display":"none"});
        $(this).find("input").animate({"width":"0px"});
    });
})
