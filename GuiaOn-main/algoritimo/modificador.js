const prompt = require("prompt-sync")();
const palavra = prompt("Digite uma palavra: ")
palavramodificada = palavra.replaceAll ("a", "?") 
console.log("Alteração concluida: " + palavramodificada)