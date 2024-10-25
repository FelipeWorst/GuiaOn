const prompt = require("prompt-sync")();

const backendReserva = require('./backendReserva')
let opcao = true;

function menu() {
    console.log("=============================");
    console.log("[1] EXIBIR RESERVA CADASTRADOS");
    console.log("[2] INSERIR RESERVA");
    console.log("[3] DELETAR RESERVA");
    console.log("[4] ENCONTRAR RESERVA");
    console.log("[5] SAIR");
    console.log("");


while (opcao) {
    let escolha = prompt("Digite a opção desejada: ");
    
    switch (escolha) {
        case "1":
            backendReserva.mostrarDados();
            menu()
            break;

        case "2":
            let dataReserva = prompt("Digite a data da reserva usando a mascara dd/mm/aaaa: ");
            let dataVolta = prompt("Digite a data de volta da reserva usando a mascara dd/mm/aaaa:");
            let pago = prompt("Digite se a reserva já esta pago ");
            backendReserva.inserirReserva(dataReserva, dataVolta, pago);
            menu()
            break;

        case "3":
            let datareservaParaDeletar = prompt("Digite a datareserva da reserva: ");
            backendReserva.deletarReserva(datareservaParaDeletar);
            menu()
            break;

        case "4":
            let datareservaParaEncontrar = prompt("Digite a datareserva da reserva: ");
            let indice = backendReserva.encontrarreserva(datareservaParaEncontrar);
            if (indice === -1) {
                console.log("reserva não encontrada.");
            } else {
                console.log("reserva encontrada:", reserva[indice]);
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