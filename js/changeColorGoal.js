$(document).ready(function() {

    function restartSrc() {
        $('#secondMainImgP > #sport > img').attr('src', 'img/icons/muscles.svg');
        $('#secondMainImgP > #weight  > img').attr('src', 'img/icons/waist.svg');
        $('#secondMainImgP > #beauty > img').attr('src', 'img/icons/makeup.svg');
        $('#secondMainImgP > #wellness > img').attr('src', 'img/icons/lotus.svg');  
    }
    $('#secondMainImgP > #sport').click(function(){ 
        restartSrc();
        var imgsrc = $('#secondMainImgP > #sport > img').attr('src');
        var res = imgsrc.replace(/\/+\w+\./g, "/musclesN.");
        $('#secondMainImgP > #sport > img').attr('src', res);
        $('#secondMainP  div').addClass('black-text');
        $(this).removeClass('black-text');
        $(this).addClass('orange-text');        
        
     }); 
     $('#secondMainImgP > #weight ').click(function(){     
        restartSrc();

        var imgsrc = $('#secondMainImgP > #weight > img').attr('src');
        var res = imgsrc.replace(/\/+\w+\./g, "/waistN.")
        $('#secondMainImgP > #weight > img').attr('src', res);
        $('#secondMainP  div').addClass('black-text');
        $(this).removeClass('black-text');
        $(this).addClass('orange-text');

        
     }); 
     $('#secondMainImgP > #beauty ').click(function(){      
        restartSrc();

        var imgsrc = $('#secondMainImgP > #beauty > img').attr('src');
        var res = imgsrc.replace(/\/+\w+\./g, "/makeupN.")
        $('#secondMainImgP > #beauty > img').attr('src', res);
        $('#secondMainP  div').addClass('black-text');
        $(this).removeClass('black-text');
        $(this).addClass('orange-text');
        
     }); 
     $('#secondMainImgP > #wellness ').click(function(){   
        restartSrc();
        var imgsrc = $('#secondMainImgP > #wellness > img').attr('src');
        var res = imgsrc.replace(/\/+\w+\./g, "/lotusN.")
        $('#secondMainImgP > #wellness > img').attr('src', res);
        $('#secondMainP  div').addClass('black-text');
        $(this).removeClass('black-text');
        $(this).addClass('orange-text');
     });                
});