const prompt = require("prompt-sync")();
console.log("Opções de obejto:")
console.log("-----------------")
console.log ("1 - Quadrado") 
console.log ("2 - Retangulo") 
console.log ("3 - Triangulo") 

const escolha = prompt("Digite o sua escolha: ")

function quadrado() {
    const base = parseInt(prompt("Digite a base do quadrado: "))
    const altura = parseInt(prompt("Digite a altura do quadrado: "))
    const soma = base * altura
    console.log("A área do quadrado é: " + soma + "cm")
}

function retangulo() {
    const base = parseInt(prompt("Digite a base do retângulo: "))
    const altura = parseInt(prompt("Digite a altura do retângulo: "))
    const soma = base * altura
    console.log("A área do retângulo é: " + soma + "cm")
}

function triangulo() {
    const base = parseInt(prompt("Digite a base do triângulo: "))
    const altura = parseInt(prompt("Digite a altura do triângulo: "))
    const soma = (base * altura) / 2
    console.log("A área do triângulo é: " + soma + "cm")
}
switch(escolha){
    case "1":
        quadrado()
        break
    case "2":
        retangulo()
        break
    case "3":
        triangulo()
        break
    default:
        console.log("Digite uma opção valida")
}