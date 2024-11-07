const prompt = require("prompt-sync")()
const backendAvaliacoes = require('./backendAvaliacoes.js')

let opcao = true

function menu() {
    console.log("=============================")
    console.log("[1] EXIBIR AVALIAÇÕES CADASTRADAS")
    console.log("[2] INSERIR AVALIAÇÃO")
    console.log("[3] DELETAR AVALIAÇÃO")
    console.log("[4] ENCONTRAR AVALIAÇÃO POR ID")
    console.log("[5] SAIR")
    console.log("")

opcao = true 
while (opcao) {
    
    let escolha = prompt("Digite a opção desejada: ")

    switch (escolha) {
        case "1":
            backendAvaliacoes.mostrarAvaliacoes()
            menu()
            break

        case "2":
            let idUsuarioAvaliador = parseInt(prompt("Digite o ID do usuário que deixou a avaliação: "))
            let idUsuarioAvaliado = parseInt(prompt("Digite o ID do usuário avaliado: "))
            let nota = parseInt(prompt("Digite a nota (1 a 5): "))
            let comentario = prompt("Digite o comentário: ")
            let dataAvaliacao = prompt("Digite a data da avaliação (dd/mm/aaaa): ")
            backendAvaliacoes.inserirAvaliacao(idUsuarioAvaliador, idUsuarioAvaliado, nota, comentario, dataAvaliacao)
            menu()
            break

        case "3":
            let idParaDeletar = parseInt(prompt("Digite o ID da avaliação: "))
            backendAvaliacoes.deletarAvaliacao(idParaDeletar)
            menu()
            break

        case "4":
            let idParaEncontrar = parseInt(prompt("Digite o ID da avaliação: "))
            let avaliacaoEncontrada = backendAvaliacoes.encontrarAvaliacao(idParaEncontrar)
            if (avaliacaoEncontrada === -1) {
                console.log("Avaliação não encontrada.")
            } else {
                console.log("Avaliação com ID: " + idParaEncontrar + " encontrada")
            }
            menu()
            break

        case "5":
            console.log("Você saiu")
            opcao = false
            break

        default:
            console.log("[ERRO] Digite uma opção válida.")
            menu()
    }
}
}

module.exports = {menu}