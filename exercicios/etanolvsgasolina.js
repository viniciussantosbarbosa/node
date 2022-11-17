//importar pacote
const read = require("readline-sync")
const colors = require("colors")

let etanol  = Number(read.question("Digite o valor do etanol? ").replace(",",","))
let gasolina  = Number(read.question("Digite o valor da gosolina? ").replace(",",","))

//processamento
if (etanol < 0.7 * gasolina){
    console.log(etanol)
}
else console.log("gasolina")
