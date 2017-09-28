$(document).ready(function () {
    //Swiper 슬라이드
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: '.swiper-pagination',
        paginationClickable:'false',

        // Navigation arrows
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',

        // And if we need scrollbar
        scrollbarHide: 'true',
    })     
    
    
    
    //스크롤이벤트
    $(window).on('scroll', function(){
        
        var now=$(this).scrollTop();
        console.log(now);
        
        if(now >= 253){
            $('.nav').addClass('fixed');
        }else if(now <= 253){
            $('.nav').removeClass('fixed');
        }
    });
    
    
    
    
    
});
