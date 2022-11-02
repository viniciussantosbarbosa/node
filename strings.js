/**
 * strings 
 */

const professor = "José de assis"
//índice 0123456789...
console.log(typeof(professor))
console.log(professor)
//obtendo o valor de um  caractere da string
console.log(professor.charAt(8))
//para obter o valor do índice de uma string
console.log(professor.indexOf("é"))
//obter uma sequencia a partir do indice
console.log(professor.substring(8))
//É possível alterar o conteúdo da string
console.log(professor.replace("josé" , "Zé")) //(original,novo)
//dica: replace(",",".")

/*** concatenação ****/
const x= 2
const y= Number("3") //converter string em número
console.log(typeof(x))
console.log(typeof(y))
console.log("Valor de X: " + x)
console.log("2" + x) //concatena
console.log("3" - x) //subtrai (o mesmo para * /)
console.log("professor: " + professor)
// evitar o uso do + na concatenação
// Para concatenar usar crase ``
console.log(`professor: ${professor}`)