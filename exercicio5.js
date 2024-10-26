let numero = [3,12,3,4,5]

let maiorNumero = 0

let menorNumero = 0

for(let i = 0; i < numero.length; i++){
        if(numero[i] > maiorNumero){
            maiorNumero = numero[i]
        }

        if(numero[i] < menorNumero || menorNumero == 0){
            menorNumero = numero[i]
        }
}

console.log("Menor número: " + menorNumero)
console.log("Maior número: " + maiorNumero)