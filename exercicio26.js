let matriz = [
    [1, 2],
    [3, 4]
]

let matriz2 = [
    [1, 2],
    [3, 1]
]

let saoIguaiss = true

for (let i = 0; i < matriz.length; i++){
    for (let k = 0; k < matriz[i].length; k++){
        if (matriz[i][k] !== matriz2[i][k]){
            saoIguaiss = false
        }
    }
}

console.log(saoIguaiss)
