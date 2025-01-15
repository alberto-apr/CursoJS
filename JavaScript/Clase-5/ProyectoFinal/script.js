function consultarPrecio(){
    let respuesta = document.getElementById("textoPrecio");

    let elementoFruta = document.getElementById("numeroFruta");
    let fruta = elementoFruta.value;

    switch(fruta){
        case "1":
            respuesta.textContent = "El precio de la manzana es $100";
            break;
        case "2":
            respuesta.textContent = "El precio de la naranja es $50";
            break;
        case "3":
            respuesta.textContent = "El precio de la platano es $70";
            break;
        case "4":
            respuesta.textContent = "El precio de la pera es $80";
            break;
        case "5":
            respuesta.textContent = "El precio de la sandía es $120";
            break;
        default:
            respuesta.textContent = "La fruta ingresada no existe";
            break;
    }
}