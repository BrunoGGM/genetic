$(document).ready(function(){
// esta variable se modifica para gregar mas preguntas 5,10,20,etc y que funcione   
let cuestions = 4;
//numero de pregunta actual, siempre debe comenzar en 1 y se modifica en la ejecucion del script
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