
const prompt = require("prompt-sync")();

console.log(  "Menu do cassino: " )
console.log("---------------------")
console.log ("1 - Deposito") 
console.log ("2 - Saque") 
console.log ("3 - Compartilhar") 
console.log ("4 - Jogar") 
console.log ("5 - Perfil")  

function carPro(nome) {
    console.log(nome);
}
const nomeProduto = prompt("Por favor, insira o nome do produto:");
carPro(nomeProduto);

function caso2(){
    console.log("Digite os dados para saque:")
    const agencia = prompt("Digite a sua agencia do banco: ")
    const conta = prompt("Digite sua conta do banco: ")
    const cpf = prompt("Digite o numero do seu cpf: ")
    console.log("Confirme os dados abaixo")
    console.log("Agencia: " + agencia)
    console.log("Conta " + conta)
    console.log("Cpf " + cpf)
    const confirmacao = prompt("Voce confirma os dados acima? ")
        if(confirmacao == "sim"){
            console.log("Ok, saque em andamento")
        }
        else
            console.log("Digite os dados novamente!")
}
function caso3(){
    console.log("Compartilhar com amigos")
    console.log("Compartilhar link")
    console.log("Clique aqui para copiar seu link de afiliado")
}
function caso4(){
    console.log("Escolha o jogo que deseja!")
    console.log("1 - Black jack")
    console.log("2 - Roleta")
    const escolhaJogo = prompt ("Qual jogo voce deseja? ")
        if (escolhaJogo == "1" || escolhaJogo == "2"){
        console.log("Boa escolha, Divirta-se")
        }
        else
            console.log("Não entendi sua escolha!")
}
function caso5(){
    console.log("Dados do cliente")
    console.log("----------------")
    console.log("Id cliente - 15414245")
    console.log("Cpf - 043.646.456-42")
    console.log("Saldo - R$4.655,20")
    console.log("Editar perfil")
    console.log("Sair da conta")
}
const escolhaMenu = prompt("Digite a opção de menu: ")
switch(escolhaMenu){
    case "1":
        caso1()
        break
    case "2":
        caso2()
            break
    case "3":
        caso3()
        break
    case "4":
        caso4()
        break
        
    case "5":
        caso5()
        break
    default:
        console.log("Opção invalida")
    }




