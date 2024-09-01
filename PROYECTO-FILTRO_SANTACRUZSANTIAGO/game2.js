/*Carrito de compras */
var carritoVisible = false;

const ff = document.getElementsByClassName('btn-eliminar');
console.log(ff)


if (document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded', ready);
}else {
    ready();
};

function ready(){
    //agregar funciones a los botones
    var botonesEliminaritem = document.getElementsByClassName('btn-eliminar')
    for (var i =0;i < botonesEliminaritem.length; i++) {
        var botton = botonesEliminaritem[i];
        botton.addEventListener('click',eliminarItemsCarrito);        
    }

    var botonesSumarCantidad = document.getElementsByClassName('sumar-cantidad');
    for (var i =0;i < botonesSumarCantidad.length; i++) {
        var button = botonesSumarCantidad[i];
        button.addEventListener('click',sumarCantidad);
    }
    var botonesRestarCantidad = document.getElementsByClassName('restar-cantidad');
    for (var i =0;i < botonesRestarCantidad.length; i++) {
        var button = botonesRestarCantidad[i];
        button.addEventListener('click',restarCantidad);
    }

    var botonesAgregarAlcarrito = document.getElementsByClassName('boton-item');
    for (var i= 0; i < botonesAgregarAlcarrito.length; i++) {
        var button = botonesAgregarAlcarrito[i];
        button.addEventListener('click',agregarAlCarritoClicked);
    }

}
// eliminar 
function eliminarItemsCarrito(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();

    actualizarTotalCarrito();

    ocultarCarrito();
}
// total del carrito
function actualizarTotalCarrito(){
    var carritoContenedor = document.getElementsByClassName('carrito')[0];
    var carritoItems = carritoContenedor.getElementsByClassName('carrito-item');
    var total = 0;


    for (var s =0; s < carritoItems.length; s++) {
        var item = carritoItems[s];
        var precioElemento = item.getElementsByClassName('carrito-item-precio')[0];
        //console.log(precioElemento);


        var precio = parseFloat(precioElemento.innerHTML.replace('$','').replace('.',''));
        console.log(precio)
        var cantidadItem = item.getElementsByClassName('carrito-item-cantidad')[0];
        var cantidad = cantidadItem.value;
        //console.log(cantidad)
        total = total + (precio * cantidad);
    }
    total = Math.round( total*100 )/100;
    document.getElementsByClassName('carrito-precio-total')[0].innerText = '$' + total.toLocaleString('es') + ',00';
}
function ocultarCarrito(){
    var carritoItems = document.getElementsByClassName('carrito-items')[0];
    if (carritoItems.childElementCount==0){
        var carrito = document.getElementsByClassName('carrito')[0];
        carrito.style.marginRight = '-100%';
        carrito.style.opacity = '0';
        carritoVisible = false;

        //maximo contenedor
        var items = document.getElementsByClassName('contenedor-items')[0];
        items.style.width = '100%';
    }
}

//aumento la cantidad de peoducto

function sumarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    var cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    console.log(cantidadActual)
    cantidadActual++;
    selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual
    actualizarTotalCarrito();

}

function restarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    var cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    console.log(cantidadActual)
    cantidadActual--;

    if (cantidadActual>=1){
        selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
            //
        actualizarTotalCarrito();
    }
}

function agregarAlCarritoClicked(event){
    alert();
    console.log('hola')
    /*
    var item = button.parentElement;
    var titulo = item.getElementsByClassName('titulo')[0].innerText;
    console.log(titulo)
    */

}