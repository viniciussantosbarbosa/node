//importar pacote
const read = require("readline-sync") 
const colors = require('colors')

console.log("conversão de temperatura")

let fahrenheit  = Number(read.question("Digite o fahrenheit: ").replace(",",","))

//processamento

let celsius = (fahrenheit - 32)/1.8

//saida

console.log (`celsius: ${celsius.toFixed(1)}`.blue)