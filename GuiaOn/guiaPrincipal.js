const prompt = require("prompt-sync")();

const frontendUsuario = require('./frontendUsuario')
const frontendPasseio = require('./frontendPasseio')
const frontendReserva = require('./frontendReserva')
const frontendRoteiros = require('./frontendRoteiros')


function menu() {
    console.log("=============================")
    console.log("[1] USUARIOS")
    console.log("[2] PASSEIOS")
    console.log("[3] RESERVAS")
    console.log("[4] ROTEIROS")
    console.log("[5] SAIR")
    console.log("")
}
let opcao = true
while(opcao){
    menu()
    escolha = prompt("Digite a sua escolha: ")
switch (escolha) {
    case '1':
        frontendUsuario.menu()
        break
    case '2':
        frontendPasseio.menu()
        break
    case '3':
        frontendReservas.menu()
        break
    case '4':
        frontendRoteiros.menu()
        break
    case '5':
        console.log("Saindo...")
        return
    default:
        console.log("Opção inválida. Tente novamente.")
}
}
