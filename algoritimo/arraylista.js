const prompt = require("prompt-sync")();
let listaSupermercado = ["maçã", "banana", "leite", "pão", "arroz"]


menu()
function menu(){
console.log("1. Adicionar item")
console.log("2. Listar itens")
console.log("3. Sair")
const opcao = prompt("Digite a opção desejada: ")

if(opcao == "1" || "2" || "3"){
    switch(opcao) {
    
        case "1": {
            const novoItem = prompt("Digite o item que deseja adicionar: ");
                listaSupermercado.push(novoItem);
                menu()
                break

        }

        case "2":
            for(let i = 0; i < listaSupermercado.length; i++){
                console.log(listaSupermercado[i])
            }
            menu()
            break
        
        

        case "3":
            console.log("Você saiu")
            break
    }
}
else{
    console.log("[ERRO] Digite uma opção valida")
}}