const prompt = require("prompt-sync")();
soma = 0
for(let i = 1; i <=5; i++){
    const num = parseInt(prompt("Digite um numero: "))
    soma = soma + num
}
media = soma / 5
console.log("A soma dos numeros é " + soma)
console.log("A media dos numeros é " + media)