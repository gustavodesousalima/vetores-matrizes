let numeros = [1,-2,3,-4,5,-6,7,-8,9,-10]

let quantPositivos = 0
let quantNegativos = 0

for (let i = 0; i < numeros.length; i++){
    if(numeros[i] > 0){
        quantPositivos++
    }else{
        quantNegativos++
    }
}

console.log(`Qauntidade negativos: ${quantNegativos}`)
console.log(`Quantidade positivos: ${quantPositivos}`)