$(document).ready(function(){

    //id de los productos ne el carrito productos
    let carrito = [];
    // numero de productos
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

    //actualizar notificacion del numero de productos del carrito
    
    $(".addCart").click(function(){      
        $('.shopping-cart-noti').html(numProductos);      
    });
    
    //eliminar producto del carrito
    $(".removeCart").click(function(){
        let id = $(this).attr('id');
        for (x=0;x<carrito.length;x++){
            if(carrito[x] === id){
                numProductos--;
                $( "#producto"+id ).remove();
                $("#" + id).prop('checked', false); 
                $('.shopping-cart-noti').html(numProductos);
                carrito.splice(x, 1);
            }
        }

        
	});
});