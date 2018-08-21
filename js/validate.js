$(document).ready(function(){
    $('#submit').click(function(){
        var first_name = $('#first_name').val();
        var last_name = $('#last_name').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var password_co = $('#password_co').val();
        var gender = $('.gender').is(':checked'); 
        var agree = $('#agree').is(':checked'); 
        if(first_name === ""){
            alertify.warning('El nombre es obligario');
            return false;
        }
        if(last_name === ""){
            alertify.warning('El apellido es obligario');
            return false;

        }
        if(gender === false){
            alertify.warning('Confirma tu genero');
            return false;

        }
        if(email === ""){
            alertify.warning('El email es obligario');
            return false;

        }
        if(password === ""){
            alertify.warning('Ingresa una contraseña');
            return false;

        }
        if(password_co === ""){
            alertify.warning('Confirma tu contraseña');
            return false;
        }

        if(password !== password_co){
            alertify.error('Las contraseñas no coinciden');
            return false;
        }
        if(gender === 'checked'){
            alertify.warning('Confirma tu genero');
            return false;

        }
        if(agree === false){
            alertify.error('Acepta los terminos');
            return false;

        }
    });

    $('#login').click(function(){
   
        var email = $('#email').val();
        var password = $('#password').val();
        if(email === ""){
            alertify.warning('El email es obligario');
            return false;

        }
        if(password === ""){
            alertify.warning('Ingresa una contraseña');
            return false;

        }
    });


});