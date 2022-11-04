//importar pacote
const read = require("readline-sync")
const colors = require("colors")

let idade  = Number(read.question("Qual a sua idade?").replace(",",","))

//processamento
if (idade <= 16){
console.log("PROBIDO VOTAR")
}
else if (idade > 17 && idade < 71){
console.log("VOTO OBRIGATORIO")
} else console.log("VOTO FACULTATIVO")
