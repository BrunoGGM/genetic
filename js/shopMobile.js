
$(document).ready(function(){
    $('select').formSelect();
    $('.shopMobile').click(function(){
        $('.shopMobileContent').removeClass('showMobileContentHide');
        $('.shopMobileContent').addClass('showMobileContentShow');

    });
    $('.closeMobileContent').click(function(){
        $('.shopMobileContent').removeClass('showMobileContentShow');
        $('.shopMobileContent').addClass('showMobileContentHide');

    });
    
});