let numeros = [12, 3, 45, 7, 22]
let num = numeros[0]
for(let i = 0; i < numeros.length; i++){
    if(numeros[i] < num){
        num = numeros[i]
    }
}    
console.log(num)