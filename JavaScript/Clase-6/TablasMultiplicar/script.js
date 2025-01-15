function calcular(){
    let elementoTextoNumero = document.getElementById('textoTabla');
    let textoNumero = elementoTextoNumero.value;
    let numero = Number(textoNumero);

    let elementoTabla = document.getElementById('listaTabla');

    for(i=1; i<=10; i++){
        //calcular el resultado
        let resultado = numero * i;

        //Armar string con el resultado
        let textoResultado = numero + ' x ' + i + ' = ' + resultado;

        //Crear un elemento de la lista
        let itemLista = document.createElement('li');
        itemLista.innerText = textoResultado;
        elementoTabla.appendChild(itemLista);
    }
}