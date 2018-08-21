$(document).ready(function() {

    $('#sport').click(function(){
        $('.table').addClass('hide');
        $('#sportTable').removeClass('hide');

    });

    $('#weight').click(function(){
        $('.table').addClass('hide');
        $('#weightTable').removeClass('hide');

    });   
    
    $('#beauty').click(function(){
        $('.table').addClass('hide');
        $('#beautyTable').removeClass('hide');

    }); 

    $('#wellness').click(function(){
        $('.table').addClass('hide');
        $('#wellnessTable').removeClass('hide');

    }); 
});