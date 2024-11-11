const prompt = require("prompt-sync")();
const nome = prompt("Digite seu nome: ")
function saudacao() {
    const horaAtual = new Date().getHours();
    mens = ""
    if (horaAtual > 5 && horaAtual < 12) {
        periodo = "Bom dia ";
        mens = periodo + nome
    } else if (horaAtual < 18) {
        periodo = "Boa tarde ";
        mens = periodo + nome
    } else {
        periodo = "Boa noite ";
        mens = periodo + nome
    }

    console.log(mens)
}
saudacao( nome)