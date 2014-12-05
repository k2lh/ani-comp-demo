$(function(){

    $('.device').click(function(){
            var id = $(this).attr('id');
            $('.deviced div:first-child').removeClass();
            $('.deviced div:first-child').addClass(id);
            $('.device').siblings().removeClass('active');
            $(id).addClass('active');
    });

});
