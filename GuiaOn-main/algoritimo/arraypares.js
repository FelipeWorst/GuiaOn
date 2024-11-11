let numeros = [2, 5, 8, 11, 14, 17, 20]
let cont = 0
let num = numeros[0]
for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 == 0){
        cont++
    }
}
console.log("Quantidade de numeros pares é " + cont)