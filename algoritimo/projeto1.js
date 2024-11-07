const prompt = require("prompt-sync")();
let livros = ["a", "f", "d", "i"]

function menu() {
    console.log("-----------------")
    console.log("1. Inserir Livro ")
    console.log("2. Deletar Livro ")
    console.log("3. Ordenar a lista de livros em ordem Alfabética ou Alfabética-invertida")
    console.log("4. Exibir todos os livros cadastrados.")
    console.log("5. Pesquisar Livro")
    console.log("6. Sair")
}

let opcao = "";

while (opcao !== "6") {

    menu();
    opcao = prompt("Digite a opção desejada: ");

    switch(opcao) {
        case "1": {
            const novoLivro = prompt("Digite o nome do livro que deseja adicionar: ");
            if (livros.indexOf(novoLivro) > -1) {
                console.log("[ERRO] não foi possível adicionar o livro pois ele já está na lista")
            } else {
                livros[livros.length] = novoLivro
            }
            break
        }

        case "2":
            const deletarLivro = prompt("Digite o nome do livro que deseja deletar: ");
            const confirmacao = prompt("Você tem certeza que deseja excluir o livro que se encontra na posição: " + deletarLivro + " [1]Sim  [2]Não: ");
             if(confirmacao == "1" && livros.indexOf(deletarLivro) !== -1){
                livros.indexOf(deletarLivro);
                livros.splice(deletarLivro, 1)
                console.log("Livro deletado com sucesso")
             }
             else if (confirmacao == "2"){
                console.log("Você optou por não excluir nenhum livro")
             }
             else{
                console.log("[ERRO] Você digitou uma opção inválida")
             }

            break

        case "3":
            console.log("1 - Ordem alfabetica")
            console.log("2 - Ordem alfabetica invertida")
            const escolha = prompt("Digite a sua escolha: ")

            if (escolha == "1") {
                livros.sort();
            } else if (escolha == "2") {
                livros.sort().reverse();
            } else
            console.log("Opção invalidada")
            break

        case "4":  
            livros.forEach((livro, indice) => {
                console.log("Nome: " + livro + " Indice: " + (indice + 1));
            });

            console.log("Quantidade total de livros: " + livros.length);
            break

        case "5":
            const item = prompt("Digite o nome do livro: ");
            const index = livros.indexOf(item);
            
            if (index !== -1) {
                console.log("Livro " + item + " encontrado.");
            } else {
                console.log("Livro não encontrado.");
            }
            break;
        
        case "6":
            console.log("Você saiu")
            break
        default:
            console.log("Você escolheu uma opção inválida")
            break
    }   
}