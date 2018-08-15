$(document).ready(function(){
    let carrito = [];
    let numProductos = $(".producto").click(function(){
        let id = $(this).attr('id');
        if(!$('#'+id).is(':checked')){
            for (x=0;x<carrito.length;x++){
                if(carrito[x] === id){         
                    carrito.splice(x, 1);
                }
            }
        }else{    
            carrito.push(id);      
        }
        return numProductos = carrito.length; 
        
        
    });
    
    $("#addCart").click(function(){      
        $('.shopping-cart-noti').html(numProductos);      
    });
    
    $(".removeCart").click(function(){
        let id = $(this).attr('id');
        for (x=0;x<carrito.length;x++){
            if(carrito[x] === id){
                numProductos--;
                $( "#producto"+id ).remove();
                $('.shopping-cart-noti').html(numProductos);
                carrito.splice(x, 1);
            }
        }

        
	});
});