$(document).ready(function(){
    
    $("#nextAboutYou").click(function(){
        $("#first_name").attr( "disabled", "disabled" );
        $("#last_name").attr( "disabled", "disabled" );
        $("#birth_day").attr( "disabled", "disabled" );
        $("#mobile").attr( "disabled", "disabled" );
        $("#email").attr( "disabled", "disabled" );
        $("#email_co").attr( "disabled", "disabled" );
        $("#coachNum").attr( "disabled", "disabled" );
        $("#kit").attr( "disabled", "disabled" );
        $("#nextAboutYouEdit").removeClass('hide');
        $("#nextAboutYou").addClass('hide');
        $('#shipping > div.collapsible-header').click();  
        
    });
    
    $("#nextAboutYouEdit").click(function(){
        $("#first_name").removeAttr( "disabled", "disabled" );
        $("#last_name").removeAttr( "disabled", "disabled" );
        $("#birth_day").removeAttr( "disabled", "disabled" );
        $("#mobile").removeAttr( "disabled", "disabled" );
        $("#email").removeAttr( "disabled", "disabled" );
        $("#email_co").removeAttr( "disabled", "disabled" );
        $("#coachNum").removeAttr( "disabled", "disabled" );
        $("#kit").removeAttr( "disabled", "disabled" );
        $("#nextAboutYouEdit").addClass('hide');
        $("#nextAboutYou").removeClass('hide');  
                   
    });

    $("#nextShopping").click(function(){

        $('#payment > div.collapsible-header').click();  
        
    });
});