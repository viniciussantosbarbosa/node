//importar pacote
const read = require("readline-sync")
const colors = require("colors")

let total  = Number(read.question("Digite o valor da compra? ").replace(",",","))
let desconto  = Number(read.question("Digite o valor de desconto? ").replace(",",","))
let dinheiro  = Number(read.question("Digite o valor pago em dinheiro:  ").replace(",",","))

//processamento
let totalDesconto = total - (desconto*total)/ 100
let troco = (dinheiro-totalDesconto)

//saída

console.log (`troco: ${totaldesconto.toFixed(1)}`.blue)