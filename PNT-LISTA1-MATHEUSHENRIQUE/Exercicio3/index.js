const prompt = require('prompt-sync')()

const peso = prompt("Informe seu peso: ")
const altura = prompt("Informe sua altura: ")

const IMC = peso/(altura**2)

if (IMC < 18.49){
    console.log(`Seu Imc é ${IMC.toFixed(1)}, você está abaixo do peso ideal!!`)
}else if(IMC <= 24.9){
    console.log(`Seu IMC é ${IMC.toFixed(1)}, você está no peso ideal!!`)
}else{
    console.log(`Seu IMC é ${IMC.toFixed(1)}, você está acima do peso ideal!!`)
}