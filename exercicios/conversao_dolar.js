
 const read = require('readline-sync')
 const colors = require('colors')
 
 //Variáveis
 
 let Valordolar = Number(read.question("Qual o valor em Real ? ").replace(",","."))

 
 //Processamento
 let valorconversao = 0.19 * Valordolar
 
 //Saída
     console.log(`Valor convertido em Dolar: R$ ${valorconversao}`.blue)
 
 
