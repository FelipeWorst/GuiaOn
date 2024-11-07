let numeros = [12, 3, 45, 7, 22]
let num = numeros[0]
let num2 = numeros[0]
for(let i = 0; i < numeros.length; i++){
    if(numeros[i] > num){
        num = numeros[i]
    }
    if(numeros[i] < num2){
        num2 = numeros[i]
    }
}    
console.log(num)
console.log(num2)