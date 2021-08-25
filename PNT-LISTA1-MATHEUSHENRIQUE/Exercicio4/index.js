const prompt = require('prompt-sync')()

const salario = prompt("Informe seu salário: ")

if (salario <= 1556.94){
    console.log(`Seu salário liquido é ${(salario - (8/100 * salario)).toFixed(2)}`)
}else if(salario <= 2594.92){
    console.log(`Seu salário liquido é ${(salario - (9/100 * salario)).toFixed(2)}`)
}else if(salario <= 5189.82){
    console.log(`Seu salário liquido é ${(salario - (11/100 * salario)).toFixed(2)}`)
}else{
    console.log(`Seu salário liquido é ${salario - 570.88}`)
}