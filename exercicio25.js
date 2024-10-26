let matriz = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 0, 1, 2],
    [3, 4, 5, 6]
]


for (let i = 0; i < matriz.length; i++){
    let somaColuna = 0
    for (let k = 0; k < matriz.length; k++){
        somaColuna += matriz[k][i]
    }
    console.log(somaColuna)
}