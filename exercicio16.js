numerosLinha0 = [1, 2, 3]
numerosLinha1 = [4, 5, 6]
numerosLinha2 = [7, 8, 9]

matriz = []

for (let i = 0; i < 3; i++){
    linha = []
    
    for(let j = 0; j < 3; j++){
        linha.push(eval(`numerosLinha${i}[${j}]`))
    }
    matriz.push(linha)
}

console.table(matriz)
console.log(eval(2 + 2))