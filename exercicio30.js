let matriz1 = [
    [1, 2],
    [3, 4]
]

let matriz2 = [
    [1, 2],
    [3, 4]
]

let subtracaoMatriz1 = 0
let subtracaoMatriz2 = 0


for(let i = 0; i < matriz1.length; i++){
    for (let j = 0; j < matriz1[i].length; j++){
        subtracaoMatriz1 -= matriz1[i][j]
    }
}

for(let i = 0; i < matriz2.length; i++){
    for (let j = 0; j < matriz2[i].length; j++){
        subtracaoMatriz2 -= matriz2[i][j]
    }
}

console.log(subtracaoMatriz1 - subtracaoMatriz2)