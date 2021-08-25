const prompt = require('prompt-sync')()

const b = prompt("Digite a base do retângulo: ")
const a = prompt("Digite a altura do retângulo: ")

const calcularArea = (base, altura) =>{
    const area = base * altura

    console.log(`A area do retângulo é ${area}`)

}

calcularArea(b, a)