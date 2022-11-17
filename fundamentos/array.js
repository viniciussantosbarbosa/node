/**
 * array - estudo do array (vetor)
 */

//para criar um vetor basta usar colchetes
//indice        [0]           [1]        [2]         [3]
let times = ["Corinthians","Palmeiras","São Paulo","Santos"]

console.log(times)
//no JS um vetor é hetogeneo e dinâmico
console.log(typeof(times))
// para saber o tamanho do vetor
console.log(times.length)
//recuperar um valor do vetor
console.log(times.indexOf("São paulo"))
//Recuperar o índice de um valor armazenado no vetor
console.log(times[2])
console.log(times[5])
//Adicionando um valor ao vetor 
times[5] = "flamengo"
console.log(times[5])
//adicionando mútiplos valores ao vetor
times.push("Cruzeiro","Sport Recife","Paysandu")
console.log(times)
console.log(times.length)
console.log(times.indexOf("São paulo"))
//adiconando valores de tipos diferentes ao vetor
times.push(1977,null,"Bragantino",true)
console.log(times)
//Removendo um item do vetor
delete times [2]
console.log(times)
//Removnedo o último item do vetor
times.pop()
console.log(times)
