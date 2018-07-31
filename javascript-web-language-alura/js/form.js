const botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault()

    let form = document.querySelector("#form-adiciona")

    let pacienteTr = document.createElement("tr")
    let nomeTd = document.createElement("td")
    let pesoTd = document.createElement("td")
    let alturaTd = document.createElement("td")
    let gorduraTd = document.createElement("td")
    let imcTd = document.createElement("td")

    
    pesoTd.textContent = form.peso.value
    alturaTd.textContent = form.altura.value
    gorduraTd.textContent = form.gordura.value
    imcTd.textContent = validarDados(
        form.peso.value, form.altura.value) ? calcImc(
            form.peso.value, form.altura.value).toFixed(2) : 0 

    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

    let tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr)
})