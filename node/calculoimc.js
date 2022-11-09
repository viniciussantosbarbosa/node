
//importar pacote
const read = require('readline-sync')
const colors = require(`colors`)

console.log ("===== CALCULO IMC =====")

let peso = Number(read.question("Digite o peso: ").replace(",",","))
let altura = Number(read.question("Digite a altura: ").replace(",",","))

//processamento
let media = peso/ (altura*altura)

//saida
console.log (`IMC: ${media.toFixed(1)}`.blue)

//status
if (media < 18.5){
    console.log("abaixo do peso".red)
} else if (media < 25){
    console.log("peso ideal".green)  

} else if (media < 30){
    console.log("Levemente abaixo do peso".red)
} else if (media < 35) {
    console.log("Obesidade grau 1".red)
}
    else if ( media <40){
    console.log ("Obesidade grau 2".red)
}
    else if (media > 40){
    console.log("Obesidade morbida".red)
}