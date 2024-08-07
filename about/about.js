/**
 * Created by Administrator on 2016/10/8.
 */
$(function(){
    $(".about-2-1").animate({"marginLeft":"100px"}).fadeIn(1000);

    $(".about-2-2 h2").fadeIn(400);
    $(".about-2-2 h2").animate({"marginTop":"0px"},600);
    $(".about-2-2 p").eq(0).animate({"marginTop":"10px"},900).fadeIn(1000);
    $(".about-2-2 p").eq(1).animate({"marginTop":"10px"},1100).fadeIn(1200);
    $(window).scroll(function(){
        var h=$(this).scrollTop();
        console.log(h);
        if(h>=133 && h<495){
            $('.about-3-1').css({"display":"block"}).animate({"width":"33%","height":"250px"},1000).fadeIn(1100);
            $('.about-3-2').css({"display":"block"}).animate({"width":"33%","height":"250px"},1000).fadeIn(1100);
            $('.about-3-3').css({"display":"block"}).animate({"width":"33%","height":"250px"},1000).fadeIn(1100);
        }
        if(h>=642 && h<1100){
            $(".abt-1").animate({"left":"31%"},1000);
            $(".abt-2").animate({"left":"52%"},1000);
            $(".abt-3").animate({"left":"73%"},1000);
            $(".about-4-2").hover(function(){
                $(this).find(".beijing").css({"display":"block"});
            },function(){
                $(this).find(".beijing").css({"display":"none"});
            })
        }
        if(h>=1200){
            $('.footer-1').fadeIn(1000);
        }
    });

})