
$(document).ready(function(){
    $('select').formSelect();

    $('#categoryForm').change(function(){
        let category = $('#categoryForm').val();
        $('#goalForm').empty().append('<option value="0" disabled selected>Goal</option>')
        $('select').formSelect();        
        switch (category) {
            case '1':
                $("#goalForm").append(new Option("Resistencia", "1"));
                $("#goalForm").append(new Option("Potencia", "2"));
                $("#goalForm").append(new Option("Protección lesiones deportivas", "3"));
                $('select').formSelect();
                break;
            case '2':
                $("#goalForm").append(new Option("Control del apetito", "1"));
                $("#goalForm").append(new Option("Control de grasa corporal", "2"));
                $('select').formSelect();
                break;
            case '3':
                $("#goalForm").append(new Option("Control de celulitis", "1"));
                $("#goalForm").append(new Option("Control de envejecimiento prematuro de la piel", "2"));
                $('select').formSelect();
                break;
            case '4':
                $("#goalForm").append(new Option("Salud cardiovascular", "1"));
                $("#goalForm").append(new Option("Salud digestiva", "2"));
                $("#goalForm").append(new Option("Estrés y detoxificación", "3"));
                $('select').formSelect();
                break;

            default:
                break;
        }
    });

    $('#go').click(function(){
        $('#already').addClass('hide');
        let category = $('#categoryForm').val();     
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
        }
    });
    
});