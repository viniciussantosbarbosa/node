//importar pacote
const read = require("readline-sync")
const colors = require("colors")

let total  = Number(read.question("Qual o valor do produto? ").replace(",",","))
let desconto  = Number(read.question("Qual o valor do desconto? ").replace(",",","))

//processamento
let totalDesconto = total - (desconto*total) /100

//saida
console.log (`total: ${totalDesconto.toFixed(1)}`.blue)