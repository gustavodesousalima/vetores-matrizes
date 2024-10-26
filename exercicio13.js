let numeros = [11,-2,3,-4,45,-6,70,-8,9,-10]
let quantNumeros = 0

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] > 9 && numeros[i] < 51){
        quantNumeros++
    }
}

console.log(quantNumeros)