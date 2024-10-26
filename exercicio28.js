let matriz = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 100, 11, 12],
    [13, 14, 15, 16]
]

for (let i = 0; i < matriz.length; i++) {
    let maiorValorLinha = 0
    for (let j = 0; j < matriz[i].length; j++) {
        
        if (matriz[i][j] > maiorValorLinha) {
            maiorValorLinha = matriz[i][j]
        }
    }

    console.log(`Maior valor da linha é ${maiorValorLinha}`)
}