let numero = [5,4,6,3,7]

let somaPares = 0
let somaImpares = 0

let quantPares = 0
let quantImpares = 0

let mediaPares = 0
let mediaImpares = 0

for (let i = 0; i < numero.length; i++) {
    if(numero[i] % 2 == 0){
        somaPares += numero[i]

        quantPares++
    }else{
        somaImpares += numero[i]

        quantImpares++
    }
}

mediaPares = somaPares / quantPares

mediaImpares = somaImpares / quantImpares




console.log(`mediia pares ${mediaPares}`)
console.log(`media pares ${mediaImpares}`)