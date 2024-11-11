const prompt = require("prompt-sync")();
console.log ("1 - Adição [+]") 
console.log ("2 - Subtração [-]") 
console.log ("3 - Multiplicação [*]") 
console.log ("4 - Divisão [/]") 
const operação = prompt("Digite o numero da operação desejada: ")
if (operação <= 4 && operação > 0){
    const num1 = parseInt(prompt("Digite o primeiro numero: ")) 
    const num2 = parseInt(prompt("Digite o segundo numero que deseja fazer a operação: "))
    switch (operação){
        case "1":
            console.log("A soma dos numeros é: " + (num1 + num2))
            break
        case "2":
            console.log("A subtração dos numeros é: " + (num1 - num2))
            break
        case "3":
            console.log("A multiplicação dos numeros é: " + (num1 * num2))
            break
        case "4":
            if (num2 > 0)
            console.log("A divisao dos numeros é: " + (num1 / num2))
            else 
            console.log("[ERRO] não pode ser dividida por 0")
            break
    } 
}
else
    console.log("Operação não reconhecida")
    

