
$(document).ready(function(){

    $('.showResult').click(function(){
        var id = $(this).attr("id");
        $('#dashResultContent').addClass('hide');
        $('#result'+id).removeClass('hide');

    });

    $('.nextR').click(function(){
        var current = $(this).attr("current");
        var next = $(this).attr("next");
        $('#result'+current).addClass('hide');
        $('#result'+next).removeClass('hide');
        $('#result'+next).addClass('slideInRight');


    });

    $('.prevR').click(function(){
        var current = $(this).attr("current");
        var prev = $(this).attr("prev");
        $('#result'+current).addClass('hide');
        $('#result'+prev).removeClass('hide');
        $('#result'+prev).addClass('slideInLeft');


    });
});