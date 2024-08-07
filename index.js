/**
 * Created by Administrator on 2016/9/25.
 */
$(function(){
    $li=$('.top li');
    $('.body-1').css({"display":"none"});
    $('.page1,.page2').css({"display":"none"});
    $li.mousemove(function(){
        $(this).find("a").css({"color":"#00bcd4"});
    });
    $li.mouseleave(function(){
        $(this).find("a").css({"color":"#000"});

    });
    $(".top li").eq(3).hover(function(){
     $('.page1').fadeIn();
        $('.page2').fadeOut();
    });
    $(".page1").mouseleave(function(){
        $('.page1').fadeOut();
    });

    $(".top li").eq(4).hover(function(){
        $('.page2').fadeIn();
        $('.page1').fadeOut();
    });
    $(".top li").eq(0).hover(function(){
        $('.page1,.page2').css({"display":"none"});
    });
    $(".top li").eq(1).hover(function(){
        $('.page1,.page2').css({"display":"none"});
    });
    $(".top li").eq(2).hover(function(){
        $('.page1,.page2').css({"display":"none"});
    });
    $(".top li").eq(5).hover(function(){
        $('.page1,.page2').css({"display":"none"});
    });
    $(".page2").mouseleave(function(){
        $('.page2').fadeOut();
    });
    $('.body-1').fadeIn(1000);
    $(".anima").animate({"marginTop":"0"},3000);
    setTimeout(function () {
        var div_a = document.getElementById("text1").style.top = "50px";
        var div_a = document.getElementById("text2").style.top = "0px";
    },2100);
    setTimeout(function () {
        var div_a = document.getElementById("text2").style.top = "50px";
        var div_a = document.getElementById("text3").style.top = "0px";
    },3100);
    setTimeout(function () {
        var div_a = document.getElementById("text3").style.top = "50px";
        var div_a = document.getElementById("text1").style.top = "0px";
    },4100);
    setInterval(function(){
        setTimeout(function () {
            var div_a = document.getElementById("text1").style.top = "50px";
            var div_a = document.getElementById("text2").style.top = "0px";
        }, 1500);
        setTimeout(function () {
            var div_a = document.getElementById("text2").style.top = "50px";
            var div_a = document.getElementById("text3").style.top = "0px";
        }, 2500);
        setTimeout(function () {
            var div_a = document.getElementById("text3").style.top = "50px";
            var div_a = document.getElementById("text1").style.top = "0px";
        }, 3500);
    },3200);
    //»¬¶¯
    $(window).scroll(function(){
        var h=$(this).scrollTop();
        console.log(h);
        if(h>=290 && h<800){
            $('.body-2-1').fadeIn().animate({"marginLeft":"100px"},1000);
            $('.body-2-2').fadeIn().animate({"marginRight":"200px"},1000);
        }
        if(h>=1000 && h<1957){
            $('.body-3-1').fadeIn(1000);
            $(".body-3-1 p").fadeIn(1000);
            $('.pho-1').fadeIn(2000);
        }
        if(h>=2057 && h<2357){
            $('.body-4-1').fadeIn(1000);
            $(".body-4-1 h2,.body-4-1 p").fadeIn(1000);
            $('.pho-2').fadeTo("slow",1);
        }
        if(h>=2575){
            $('.footer-1').fadeIn(1000);
        }
    });



   //µã»÷°´Å¥
   $(".btn").click(function(){
        var h=$(this).scrollTop();
       $(".pho-1").hide();
            if(h<1000){
                h+=1300;
                window.scrollTo(0,h);
                $('.body-3-1').fadeIn(1000);
                $(".body-3-1 p").fadeIn(1000);
                $('.pho-1').toggle("slow",function(){
                    $(".btn").click(function(){
                        $(".pho-1").stop(true,true).css({"display":"block"});
                    });
                });


            }

    });

    $('.pho-1').hover(function(){
        $(this).find('img').animate({"width":"380px"},300);
        //$(this).find(".mengban").animate({"height":"300px"});
        $(this).find(".mengban").fadeIn("fast");
        $(this).find("input").animate({"width":"70px"},600)

    },function(){
        $(this).find('img').animate({"width":"100%"},300);
        $(this).find(".mengban").css({"display":"none"});
        $(this).find("input").animate({"width":"0px"});
    });
    $('.demo').click(function(){
        $(this).siblings('.model').fadeIn("slow");
    });
    $(".model").click(function(){
        $(this).fadeOut('slow');
    });
});