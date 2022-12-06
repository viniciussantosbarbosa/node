
let read = require("readline-sync")

let nome = read.question("Qual seu nome?")
let idade = Number(read.question("Qual sua idade?"))
let meses = (idade *12)
let dias = (idade *365)
let horas = (idade *8760)
let minutos = (idade *525600)

console.log(`${nome} Sua idade em Meses: ${meses.toFixed(0)} Meses `)
console.log(`${nome} Sua idade em Dias: ${dias.toFixed(0)} Dias `)
console.log(`${nome} Sua idade em Horas: ${horas.toFixed(0)} Horas `)
console.log(`${nome} Sua idade em Minutos: ${minutos.toFixed(0)} Minutos`)