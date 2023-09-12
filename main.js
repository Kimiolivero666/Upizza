$(document).ready(function(){
    $('.fa-arrow-up').click(function(){
        $('body,html').animate({
            scrollTop: '0px'
        }, 300)
    })

    $(window).scroll(function(){
        if( $(this).scrollTop() > 0 ){
            $('.fa-arrow-up').slideDown(300);
        } else {
            $('.fa-arrow-up').slideUp(300);
        }
    })
})