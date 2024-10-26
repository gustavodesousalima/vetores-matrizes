let numeros = [1,2,3,4,0]

let contador = 0

while(contador <= numeros.length){
    if(numeros[contador] === 0){
        console.log(`número ${numeros[contador]} encontrado`)
    }
    contador++
}