//Cálculo de porcentagem


//importar pacote
const read = require('readline-sync')
const colors = require(`colors`)

console.log ("===== Calculo porcentagem =====")


let x = Number(read.question("Digite o valor de x: ").replace(",",","))
let y = Number(read.question("Digite o valor de y: ").replace(",",","))

//processamento
let media = (x*y) / 100

//saída
console.log (`porcentagem: ${media}`.blue)
