let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 88, 9]
]

let maiorValorNoMomento = 0

for (let i = 0; i < matriz.length; i++) {
    for (let b = 0; b < matriz[i].length; b++) {

    if (matriz[i][b] > maiorValorNoMomento) {
        maiorValorNoMomento = matriz[i][b]
    }

    }
}

console.log(maiorValorNoMomento)