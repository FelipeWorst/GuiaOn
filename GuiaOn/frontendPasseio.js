const prompt = require("prompt-sync")();

const backendPasseio = require('./backendPasseio')
let opcao = true;

function menu() {
    console.log("=============================");
    console.log("[1] EXIBIR PASSEIOS CADASTRADOS");
    console.log("[2] INSERIR PASSEIO");
    console.log("[3] DELETAR PASSEIO");
    console.log("[4] ENCONTRAR PASSEIO");
    console.log("[5] SAIR");
    console.log("");


while (opcao) {

    let escolha = prompt("Digite a opção desejada: ");
    
    switch (escolha) {
        case "1":
            backendPasseio.mostrarDados();
            menu()
            break;

        case "2":
            let dataPasseio = prompt("Digite a data do PASSEIO usando a mascara dd/mm/aaaa: ");
            let dataVolta = prompt("Digite a data de volta do PASSEIO usando a mascara dd/mm/aaaa:");
            let pago = prompt("Digite se o PASSEIO já esta pago ");
            backendPasseio.inserirPasseio(dataPasseio, dataVolta, pago);
            menu()
            break;

        case "3":
            let dataPasseioParaDeletar = prompt("Digite o dataPasseio do PASSEIO: ");
            backendPasseio.deletarPasseio(dataPasseioParaDeletar);
            menu()
            break;

        case "4":
            let dataPasseioParaEncontrar = prompt("Digite o dataPasseio do PASSEIO: ");
            let indice = backendPasseio.encontrarPasseio(dataPasseioParaEncontrar);
            if (indice === -1) {
                console.log("PASSEIO não encontrado.");
            } else {
                console.log("PASSEIO encontrado:", Passeio[indice]);
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