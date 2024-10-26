let matriz = [
    [1, 2, 3],
    [2, 4, 5],
    [3, 5, 1]
]

let simetrico = true

for (let i = 0; i < matriz.length; i++) {
    for (let j = i + 1; j < matriz[i].length; j++) {
        
        if(matriz[i][j] !== matriz[j][i]){
            simetrico = false

            break
        }
    }

    if(!simetrico){
        break
    }
}

console.log(simetrico)