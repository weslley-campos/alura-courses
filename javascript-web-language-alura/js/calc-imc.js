
let pacientes = document.querySelectorAll(".paciente")

for (let i = 0; i < pacientes.length; i++) {
    let peso = pacientes[i].querySelector(".info-peso").textContent
    let altura = pacientes[i].querySelector(".info-altura").textContent
   
    if(validarDados(peso, altura)) {
        pacientes[i].querySelector(".info-imc")
            .textContent = calcImc(peso, altura).toFixed(2)
    } else {
        pacientes[i].classList.add("paciente-invalido")
    }
    
}

function validarDados(peso, altura) {
    console.log('peso :', peso);
    console.log('altura :', altura);
    return validarPeso(peso) && validarAltura(altura)
}

function validarPeso(peso) {
    return peso > 0 && peso < 500? true : false
}

function validarAltura(altura) {
    return altura > 0 && altura < 3? true : false
}

function calcImc(peso, altura) {
    return peso / (altura * altura)
}

