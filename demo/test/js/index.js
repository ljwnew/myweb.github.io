/*===========================
 StickUp.main.js插件
 ==========================*/
jQuery(function($) {
        $(document).ready( function() {
                    //enabling stickUp on the '.navbar-wrapper' class
            $('.main-navigation').stickUp({
                parts:{
                            0:'left',
                            1:'middle',
                            2:'right'
                        },
                        itemClass: 'btn-success',
                        itemHover: 'active',
                        marginTop: 'auto'
            });
        });
    });
/*===========================
 1. function 回到顶部
 ==========================*/
var themeApp = {
    backToTop:function (){
        $(window).scroll(function (){
           if ($(this).scrollTop() > 100) {

                $('#back-to-top').fadeIn();
            }else{
                $('#back-to-top').fadeOut();
            }
        });
        $('#back-to-top').on('click',function (e){
            e.preventDefault();
            $('html, body').animate({scrollTop : 0},1000);
            return false;
        });
    }
}

/*===========================
 2. 调用
 ==========================*/
 $(function (){
    

    themeApp.backToTop();

 });