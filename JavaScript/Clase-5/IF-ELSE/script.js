function evaluarCompra(){
    let respuesta = document.getElementById("decision");
    
    let elementoPrecio = document.getElementById("textoPrecio");
    let precio = elementoPrecio.value;

    let aprobada = "Compra realizada";
    let rechazada = "Compra no realizada";

    if(precio > 100){
        respuesta.textContent = rechazada;
    }
    else{
        respuesta.textContent = aprobada;
    }
}