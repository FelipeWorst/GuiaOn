const prompt = require("prompt-sync")();

const backendUsuario = require('./backendUsuario')
let opcao = true;

function menu() {
    console.log("=============================");
    console.log("[1] EXIBIR USUÁRIOS CADASTRADOS");
    console.log("[2] INSERIR USUÁRIO");
    console.log("[3] DELETAR USUÁRIO");
    console.log("[4] ENCONTRAR USUÁRIO");
    console.log("[5] SAIR");
    console.log("");


while (opcao) {

    let escolha = prompt("Digite a opção desejada: ");
    
    switch (escolha) {
        case "1":
            backendUsuario.mostrarDados();
            menu()
            break;

        case "2":
            let nome = prompt("Digite o nome do usuário: ");
            let email = prompt("Digite o email do usuário: ");
            let senha = prompt("Digite a senha do usuário: ");
            let tipo = prompt("Digite a tipo do usuário: ");
            backendUsuario.inserirUsuario(nome, email, senha, tipo);
            menu()
            break;

        case "3":
            let emailParaDeletar = prompt("Digite o email do usuário: ");
            backendUsuario.deletarUsuario(emailParaDeletar);
            menu()
            break;

        case "4":
            let emailParaEncontrar = prompt("Digite o email do usuário: ");
            let indice = backendUsuario.encontrarUsuario(emailParaEncontrar);
            if (indice === -1) {
                console.log("Usuário não encontrado.");
            } else {
                console.log("Usuário encontrado:", usuarios[indice]);
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