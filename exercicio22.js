let matriz = [
    [1, 1],
    [5, 5]
]

let matriz2 = [
    [1, 1],
    [5, 5]
]


let matriz3 = []

for (let i = 0; i < matriz.length; i++){
    let linha = []
    for(let g = 0; g < matriz[i].length; g++){
        linha.push(matriz[i][g] * matriz2[i][g])
    }
    matriz3.push(linha)
}

console.table(matriz3)