const prompt = require("prompt-sync")();

const backendRoteiros = require('./backendRoteiros')
let opcao = true;

function menu() {
    console.log("=============================");
    console.log("[1] EXIBIR Roteiro CADASTRADOS");
    console.log("[2] INSERIR Roteiro");
    console.log("[3] DELETAR Roteiro");
    console.log("[4] ENCONTRAR Roteiro");
    console.log("[5] SAIR");
    console.log("");


while (opcao) {

    let escolha = prompt("Digite a opção desejada: ");
    
    switch (escolha) {
        case "1":
            backendRoteiros.mostrarDados();
            menu()
            break;

        case "2":
            let dataRoteiro = prompt("Digite a data do Roteiro usando a mascara dd/mm/aaaa: ");
            let dataVolta = prompt("Digite a data de volta do Roteiro usando a mascara dd/mm/aaaa:");
            let descricao = prompt("Digite a descricao do Roteiro ");
            backendRoteiros.inserirRoteiro(dataRoteiro, dataVolta, descricao);
            menu()
            break;

        case "3":
            let dataRoteiroParaDeletar = prompt("Digite o dataRoteiro do Roteiro: ");
            backendRoteiros.deletarRoteiro(dataRoteiroParaDeletar);
            menu()
            break;

        case "4":
            let dataRoteiroParaEncontrar = prompt("Digite o dataRoteiro do Roteiro: ");
            let indice = backendRoteiros.encontrarRoteiro(dataRoteiroParaEncontrar);
            if (indice === -1) {
                console.log("Roteiro não encontrado.");
            } else {
                console.log("Roteiro encontrado:", Roteiro[indice]);
            }
            menu()
            break;

        case "5":
            console.log("Você saiu.");
            opcao = false;
            menu()
            break;

        default:
            console.log("[ERRO] Digite uma opção válida.");
            menu()
            break
    }
}
}
module.exports = {menu}