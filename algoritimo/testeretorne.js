const prompt = require("prompt-sync")();
console.log("-----------------------------")
console.log("Jogo do Par ou Impar")
console.log("-----------------------------")
const escolha = prompt("Voce quer par ou impar? ")
if (escolha != "par" && escolha != "impar"){
    console.log("Somente par ou impar")
    return
}
const numero = parseInt(prompt("Digite um numero de um a 11: "))
if (numero <= 11 && numero >= 0){
    numeroComputador = resultado = Math.floor(Math.random() * 11);
    console.log("Numero do computador: " + numeroComputador)
    resultado = numero + numeroComputador 
  
        if (escolha == "par"){
            if (resultado % 2 == 0)
                console.log("Numero " + resultado + " é par, voce ganhou")
            else{
                console.log("Numero " + resultado + " é impar, voce perdeu!")
            }
        }
        else if (escolha == "impar") {
            if (resultado % 2 == 1)
                console.log("Numero " + resultado + " é impar, voce ganhou")
        }
            else
                console.log("Numero " + resultado + " é par, voce perdeu!")
        }
        else
            console.log("Nao reconheci sua escolha, somente par ou impar")