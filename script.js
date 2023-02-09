
function imc() {
    let nome = document.querySelector("#nome").value
    let peso = document.querySelector("#peso").value
    let altura = document.querySelector("#altura").value
    let resultado = document.querySelector("#resultado")

    if (nome !== '' && altura !== '' && peso !== '') {
        //tofixed para casas decimais

        valorImc = (peso / (altura * altura)).toFixed(1)
        let tipoImc

        if (valorImc < 18.5) {
            tipoImc = "Abaixo do peso!"
        } else if (valorImc < 25) {
            tipoImc = "Você está com o peso ideal!"
        } else if (valorImc < 30) {
            tipoImc = "Você está levemente acima do peso!"
        } else if (valorImc < 35) {
            tipoImc = "Obesidade grau I"
        } else if (valorImc < 40) {
            tipoImc = "Obesidade grau II"
        } else {
            tipoImc = "Obesidade grau III"
        }
        resultado.textContent = `${nome} Seu IMC é ${valorImc}! e você esta ${tipoImc} `
    } else {
        resultado.textContent = "Preencha todos os campos!!!"
    }

}