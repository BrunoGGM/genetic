$(document).ready(function(){

    $('.showResult').click(function(){
        var id = $(this).attr("id");
        $('#dashResultContent').addClass('hide');
        $('#supplement'+id).removeClass('hide');

    });

    $('.nextR').click(function(){
        var current = $(this).attr("current");
        var next = $(this).attr("next");
        $('#supplement'+current).addClass('hide');
        $('#supplement'+next).removeClass('hide');        

    });

    $('.prevR').click(function(){
        var current = $(this).attr("current");
        var prev = $(this).attr("prev");
        $('#supplement'+current).addClass('hide');
        $('#supplement'+prev).removeClass('hide');

    });

});