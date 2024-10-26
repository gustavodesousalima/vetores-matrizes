let matriz = [
    [61, 62, 73, 84],
    [55, 46, 37, 28],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]

let soma = 0
let media = 0
let contador = 0

for (let i = 0; i < matriz.length; i++){
    for(let g = 0; g < matriz[i].length; g++){
        soma += matriz[i][g]
        contador++
    }
}

media = soma / contador

console.log(Math.floor(media))