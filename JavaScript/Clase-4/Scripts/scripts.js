
function sumar() {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    mostrarResultado(num1 + num2);
}
function restar() {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    mostrarResultado(num1 - num2);
}
function multiplicar() {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    mostrarResultado(num1 * num2);
}
function dividir() {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    mostrarResultado(num1 - num2);
}
function raiz() {
    let num2 = +document.getElementById("num2").value;
    mostrarResultado(Math.sqrt(num2));
}
function potencia() {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    mostrarResultado(Math.pow(num1, num2));
}
function cuadrada() {
    let num2 = +document.getElementById("num2").value;
    mostrarResultado(Math.pow(num2, 2)); 
}
function valorAbsoluto() {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    mostrarResultado(Math.abs(num1));
}
function redondear() {
    var redondeo = document.getElementById("result").value;
    redondeo.textContent = mostrarResultado(Math.round(redondeo));
}
function random() {
    let minimo = +document.getElementById("num1").value;
    let maximo = +document.getElementById("num2").value;
    maximo = maximo + 1;
    mostrarResultado(Math.floor(Math.random() * (maximo-minimo) + minimo));
}
function piso(){
    var redondeo = document.getElementById("result").value;
    redondeo.textContent = mostrarResultado(Math.floor(redondeo));
}
function techo(){
    var redondeo = document.getElementById("result").value;
    redondeo.textContent = mostrarResultado(Math.ceil(redondeo));
}
function mostrarResultado(result){
    document.getElementById("result").value = result;
}
