const prompt = require("prompt-sync")()
const backendGuia = require('./backendGuia')

function menu() {
    console.log("=============================")
    console.log("[1] EXIBIR Guias CADASTRADOS")
    console.log("[2] INSERIR guia")
    console.log("[3] DELETAR guia")
    console.log("[4] ENCONTRAR guia")
    console.log("[5] SAIR")
    console.log("")
}

let opcao = true
while (opcao) {
    menu()
    let escolha = prompt("Digite a opção desejada: ")
    
    switch (escolha) {
        case "1":
            backendGuia.mostrarDados()
            menu()
            break
        
        case "2":
            const nomeguia = prompt("Digite o nome do guia: ")
            const popguia = parseInt(prompt("Digite a quantidade de viagens do guia: "))
            backendGuia.inserirguia(nomeguia, popguia)
            menu()
            break

        case "3":
            const nomeGuiaDeletar = prompt("Digite o nome do guia: ");
            const indiceDeletar = backendGuia.encontrarguia(nomeGuiaDeletar)
            if (indiceDeletar !== -1) {
                backendGuia.deletarguia(indiceDeletar)
                console.log("Guia deletado com sucesso.")
            } else {
                console.log("Guia não encontrado.")
            }
            menu()
            break
            
        case "4":
            const nomeguiaBuscar = prompt("Digite o nome do guia: ")
            const indiceBuscar = backendGuia.encontrarguia(nomeguiaBuscar)
            if (indiceBuscar === -1) {
                console.log("Guia não encontrado.")
            }
            else {
                console.log("Guia encontrado no índice: " + indiceBuscar)
            }
            menu()
            break

        case "5":
            console.log("Você saiu.")
            opcao = false
            menu()
            break
            

        default:
            console.log("[ERRO] Digite uma opção válida.")
            menu()
            break
    }       
}