const prompt = require("prompt-sync")();
const fruta = prompt("Digite a fruta desejada: ")
switch (fruta) {
    case "papayas" :
        console.log("Papayas custa R$2.80")
        break
    case "banana" :
        console.log("Banana custa R$1.80")
        break
    case "melancia" :
        console.log("melancia custa R$3.00")
        break
    case "pera" :
        console.log("Pera custa R$3.40")
        break
    case "bergamota" :
        console.log("bergamota custa R$2.00")
        break
    default:
        console.log("Fruta nao reconhecida")
}