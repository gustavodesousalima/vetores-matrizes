let numeros = [1,-2,3,-4,5,-6,7,-8,9,-10]

let somaPositivos = 0
let somaNegativos = 0

for (let i = 0; i < numeros.length; i++){
    if(numeros[i] > 0){
        somaPositivos += numeros[i] 
    }else{
        somaNegativos += numeros[i]
    }
}

console.log(`Soma negativos: ${somaNegativos}`)
console.log(`Soma positivos: ${somaPositivos}`)