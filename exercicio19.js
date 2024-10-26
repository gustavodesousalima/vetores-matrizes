let matriz1 = [
    [1, 2],
    [3, 4]
]

let matriz2 = [
    [1, 2],
    [3, 4]
]

let somamatriz1 = 0
let somamatriz2 = 0


for(let i = 0; i < matriz1.length; i++){
    for (let j = 0; j < matriz1[i].length; j++){
        somamatriz1 += matriz1[i][j]
    }
}

for(let i = 0; i < matriz2.length; i++){
    for (let j = 0; j < matriz2[i].length; j++){
        somamatriz2 += matriz2[i][j]
    }
}

console.log(somamatriz1 + somamatriz2)