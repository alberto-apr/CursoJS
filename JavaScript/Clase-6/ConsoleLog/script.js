function calcular(){
    let r1 = document.getElementById("r1");
    let r2 = document.getElementById("r2");
    let r3 = document.getElementById("r3");

    let edadPersona = document.getElementById("edad");
    let anios = edadPersona.value;

    let puedeBeber = anios >= 18;
    r1.textContent = puedeBeber;

    let puedeIngresar = anios >= 18 && anios <= 30;
    r2.textContent = puedeIngresar;

    let entradaGratis = anios == 25 || anios == 20;
    r3.textContent = entradaGratis;
}