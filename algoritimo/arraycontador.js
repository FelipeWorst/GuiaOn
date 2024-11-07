const array = ["casa", "café", "livro", "senac", "programador"]
let cont = 0
for(let i = 0; i < array.length; i++){
    console.log (array[i] + " - numero de letras é: " + array[i].length)
    cont += array[i].length
    
}
console.log(cont)