//criar um array com 5 n[umeros e imprimir todos
//calcular a soma e a média dos elementos de um array
//encontrar o maior e menos número de um array
//criar um array de 5 numeros sem declarar diretamente a variavel usando for

//1
const array = ["Um", "Dois", "Tres", "Quatro", "Cinco"]
console.log(array)

//2
const array2 = [1,2,3,4,5]
let soma = 0
for (i = 0; i < array2.length; i++){
    //soma = soma + i
    soma += array2[i]
}
console.log(soma)
let media = soma / array2.length
console.log(media)