$(document).ready(function(){

let cuestions = 4;
let numCuestion = 1;

$('#numQuestion').html(cuestions);
$('.answers .answer').click(function(){
    if($(this).hasClass('z-depth-2')){
        $(this).removeClass('z-depth-2'); 
    }else{
        $(this).addClass('z-depth-2');
    }

});

$('#assessmentContinue').click(function(){
    $('#activateKit').addClass('hide');
    $('#assessment').removeClass('hide');

});

$('#nextquestion').click(function(){

    
        if(numCuestion <= cuestions-1){
            
            $('#question'+numCuestion).addClass('hide');
            numCuestion++;
            $('#currentQuestion').html(numCuestion);
            $('#question'+numCuestion).removeClass('hide');
    
        }else{
            $('#assessment').addClass('hide');
            $('#done').removeClass('hide');
        }
    


});

$('#backquestion').click(function(){

    if(numCuestion > 1){
      
        $('#question'+numCuestion).addClass('hide');
        numCuestion--;
        $('#currentQuestion').html(numCuestion);
        $('#question'+numCuestion).removeClass('hide');    
    } else{
        return 0;
    }

});

});