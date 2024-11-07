
const prompt = require("prompt-sync")();
let valorTotal = 0
console.log( "Menu do resturante:" )
console.log("---------------------")
console.log ("1 - Hamburguer         R$30,00") 
console.log ("2 - Pizza              R$40,00") 
console.log ("3 - Hot Dog            R$18,00") 
console.log ("4 - Lasanha            R$20,00") 
console.log ("5 - Xis                R$26,00") 
console.log("---------------------")
console.log("  Menu de bebidas:" )
console.log("---------------------")
console.log ("6- Dose Jack Daniels   R$30,00") 
console.log ("7 - Caipira            R$15,00") 
console.log ("8 - Refri lata         R$18,00") 
console.log ("9 - Agua               R$20,00") 
console.log ("10 - Chá               R$26,00") 
 
const escolhaCardapio = prompt("Digite o numero da comida que deseja: ")
const escolhaBebida = prompt("Digite o numero da bebida que deseja: ")
let nomeBebida = ""
let precobebida = 0
let nomeComida = ""
let precoComida = 0
switch (escolhaCardapio){
    case "1":
    nomeComida =  "Hamburguer";
    precoComida = 30.00
    break
    case "1":
        nomeComida =  "Pizza";
        precoComida = 40.00
    break
    case "2":
        nomeComida =  "Hot Dog";
        precoComida = 18.00
        break
    case "3":
        nomeComida =  "Lasanha";
        precoComida = 20.00
        break
    case "4":
        nomeComida =  "Xis";
        precoComida = 26.00
        break
}
switch (escolhaBebida){
    case "6":
        nomeBebida =  "Dose Jack Daniels";
        precobebida = 30.00
        break
    case "7":
        nomeBebida =  "Caipira";
        precobebida = 15.00
        break
    case "8":
        nomeBebida =  "Refri lata";
        precobebida = 18.00
        break
    case "9":
        nomeBebida =  "Agua";
        precobebida = 20.00
        break
    case "10":
        nomeBebida =  "Chá";
        recobebida = 26.00
        break
}
valorTotal = precoComida + precobebida
console.log("Bela escolha! Está saindo um " + nomeComida + " acompanhado de um " + nomeBebida + " no valor total de: " + valorTotal + "R$")
console.log("Qual seria a forma de pagamento? ")
console.log("-------------------------------- ")
console.log("1 - Pix")
console.log("2 - Dinheiro")
console.log("3 - Cartão")
const pagamento = prompt("Digite a opção de pagamento desejada: ")
switch (pagamento){
    case "1":
        console.log("Chave pix email: restaurantes.pagamento@gmail.com")
        break
    case "2":
        const valorCliente = parseInt(prompt("Digite o valor que ira entregar "))
        if (valorCliente > valorTotal){
            troco = valorCliente - valorTotal
            console.log("O seu troco de " + troco + "R$ está aqui!")
        }
        else if (valorCliente == valorTotal){
            console.log("Tudo certo!")
        }
        else
            console.log("[erro] Valor dado pelo cliente é menor que valor total da compra!")
        
        break
    case "3":
        console.log("Credito ou debito? ")
        const cartao = prompt("Digite credito ou debito: ")
        console.log("Ok.")
        break
}