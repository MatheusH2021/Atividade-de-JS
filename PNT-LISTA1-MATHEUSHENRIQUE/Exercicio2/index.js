const prompt = require('prompt-sync')()

const Nota1 = prompt("Digite a primeira nota: ")
const Nota2 = prompt("Digite a segunda nota: ")
const Nota3 = prompt("Digite a terceira nota: ")
const Nota4 = prompt("Digite a quarta nota: ")

const media = (parseInt(Nota1) + parseInt(Nota2) + parseInt(Nota3) + parseInt(Nota4))/4

if (media >= 6){
    console.log(`A sua média é ${media}, você foi aprovado!!`)
}else{
    console.log(`A sua média é ${media}, você foi reprovado!!`)
}