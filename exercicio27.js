let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
let contador = 0
let soma = 0

for(let i = 0; i < matriz.length; i++){
    soma += matriz[i][matriz.length - 1 - i]
}

console.log(soma)