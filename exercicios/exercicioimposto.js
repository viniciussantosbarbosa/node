const read = require('readline-sync')
const colors = require ('colors')



let produto = Number(read.question("Qual o valor do produto em real?").blue)

let conversão = produto / 5.3600

console.log(`valor em dolar R$${conversão.toFixed(2)}`.blue)

let impostoProduto = (conversão * 0.3) + conversão

console.log(`valor do produto com imposto R$${impostoProduto.toFixed(2)}`.red)