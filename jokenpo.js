/**
 * Jogo - Pedra - Papel - Tesoura
 */

// importar pacote

const read = require('readline-sync')

console.log("______JokenPô_______")

console.log("1. pedra")
console.log("2. Papel")
console.log("3. tesoura")
console.log("")
let jogador = Number(read.question("Digite a opcao desejada: "))

switch (jogador) {
    case 1:
        console.log("Jogador escolheu PEDRA")
        break
    case 2:
        console.log("Jogador escolheu PAPEL")
        break
    case 3:
        console.log("Jogador escolher TESOURA")
        break

        default:
        console.log("Opcao INVALIDA")
        break   
}

//lógica do computador

let computador = Math.floor(Math.random() * 3 + 1)

switch (computador) {
    case 1:
        console.log("Computador escolheu PEDRA")
        break
    case 2:
        console.log("Computador escolheu PAPEL")
        break
    case 3:
        console.log("Computador escolher TESOURA")
        break

        default:
        console.log("Opcao INVALIDA")
        break   
}

console.log("")
//lógica para declarar vencedor ouempate

if (jogador == computador) {
    console.log("EMPATE")
} else if ((jogador == 1 && computador == 3) || (jogador == 2 && computador == 1) || (jogador == 3 && computador ==2 )){
    console.log("jogador VENCEU")
}else{
    console.log("computador VENCEU")
}

