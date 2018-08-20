$(document).ready(function(){

//slider
$('.nextT').click(function(){
    $('.slider').slider('next');

});

$('.prevT').click(function(){
    $('.slider').slider('prev');

});

    //corousel            
$('.nextC').click(function(){
    $('.carousel').carousel('next');

});

$('.prevC').click(function(){
    $('.carousel').carousel('prev');

});

//Show ticket

$('.showTicket').click(function(){
    $('#historyTable').addClass('hide');
    $('#ticket').removeClass('hide');
    $('#headerHistory').html('COMPROBANTE DE PAGO');

});


});