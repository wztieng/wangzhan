/**
 * Created by Administrator on 2016/10/10.
 */
$(window).scroll(function(){
    var h=$(this).scrollTop();
    console.log(h);
    if(h>=600){
        $('.footer-1').fadeIn(1000);
    }
});