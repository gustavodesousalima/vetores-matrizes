let numeros = [3, 12, 3, 4, 5, -1, -2, -3, -4, -5]

let positivos = 0

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 0){
        positivos++
    }
}

console.log(positivos)