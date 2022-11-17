/**
 * Exemplo de uso do vetor
 */

let nipes = ["Ouros","Copas","Espadas","Paus"]
let faces = ["Az",2,3,4,5,6,7,8,9,10,"Valete","Dama","Rei"]

//Recuperando a carta Az de ouros
console.log(`Cartaz: ${faces[0]} de ${nipes[0]}`)
console.log(`Cartaz:${faces[11]} de ${nipes[1]}`)

//sorteio de uma carta
// match random -> gerador de números aleatórios
let sorteioNipe = Math.floor(Math.random() * 4)
console.log(sorteioNipe)
let sorteioFace = Math.floor(Math.random() * faces.length)
console.log(`carta sorteada: ${faces[sorteioFace]} de ${nipes[sorteioNipe]}`)