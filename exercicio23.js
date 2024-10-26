let matriz = [
    [1, 4, 5],
    [5, 5, 5],
    [1, 1, -2]
]

let menorNumero = 0

for(let i = 0; i < matriz.length; i++){
    for (let g = 0; g < matriz.length; g++){
        if(matriz[i][g] < menorNumero){
            menorNumero += matriz[i][g]
        }
    }
}

console.log(menorNumero)