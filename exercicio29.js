let matriz = [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1]
]

matrizIdentidade = true

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
        if(i === j && matriz[i][j] !== 1){
            matrizIdentidade = false
        }

        if(i !== j && matriz[i][j] !== 0){
            matrizIdentidade = false
        }
    }
}

console.log(matrizIdentidade)