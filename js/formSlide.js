
$(document).ready(function(){
    $('select').formSelect();

    $('#categoryFormSlide').change(function(){
        let category = $('#categoryFormSlide').val();
        $('#goalFormSlide').empty().append('<option value="0" disabled selected>Goal</option>')
        $('select').formSelect();        
        switch (category) {
            case '1':
                $("#goalFormSlide").append(new Option("Resistencia", "1"));
                $("#goalFormSlide").append(new Option("Potencia", "2"));
                $("#goalFormSlide").append(new Option("Protección lesiones deportivas", "3"));
                $('select').formSelect();
                break;
            case '2':
                $("#goalFormSlide").append(new Option("Control del apetito", "1"));
                $("#goalFormSlide").append(new Option("Control de grasa corporal", "2"));
                $('select').formSelect();
                break;
            case '3':
                $("#goalFormSlide").append(new Option("Control de celulitis", "1"));
                $("#goalFormSlide").append(new Option("Control de envejecimiento prematuro de la piel", "2"));
                $('select').formSelect();
                break;
            case '4':
                $("#goalFormSlide").append(new Option("Salud cardiovascular", "1"));
                $("#goalFormSlide").append(new Option("Salud digestiva", "2"));
                $("#goalFormSlide").append(new Option("Estrés y detoxificación", "3"));
                $('select').formSelect();
                break;

            default:
                break;
        }
    });

    
    $('#categoryFormSlideM').change(function(){
        let category = $('#categoryFormSlideM').val();
        $('#goalFormSlideM').empty().append('<option value="0" disabled selected>Goal</option>')
        $('select').formSelect();        
        switch (category) {
            case '1':
                $("#goalFormSlideM").append(new Option("Resistencia", "1"));
                $("#goalFormSlideM").append(new Option("Potencia", "2"));
                $("#goalFormSlideM").append(new Option("Protección lesiones deportivas", "3"));
                $('select').formSelect();
                break;
            case '2':
                $("#goalFormSlideM").append(new Option("Control del apetito", "1"));
                $("#goalFormSlideM").append(new Option("Control de grasa corporal", "2"));
                $('select').formSelect();
                break;
            case '3':
                $("#goalFormSlideM").append(new Option("Control de celulitis", "1"));
                $("#goalFormSlideM").append(new Option("Control de envejecimiento prematuro de la piel", "2"));
                $('select').formSelect();
                break;
            case '4':
                $("#goalFormSlideM").append(new Option("Salud cardiovascular", "1"));
                $("#goalFormSlideM").append(new Option("Salud digestiva", "2"));
                $("#goalFormSlideM").append(new Option("Estrés y detoxificación", "3"));
                $('select').formSelect();
                break;

            default:
                break;
        }
    });
    $('#goSlide').click(function(){
        /*let category = $('#categoryFormSlide').val();     
        $('.contentM').addClass('hide');   
        switch (category) {
            case '1':
            $('#sportM').removeClass('hide');            
            break;
            case '2':
            $('#nutriM').removeClass('hide');            

            break;
            case '3':
            $('#skinM').removeClass('hide');            
            
            break;
            case '4':
            $('#wellnessM').removeClass('hide');            
            
            break;                        
            default:
                break;
        }*/
    });
    
});