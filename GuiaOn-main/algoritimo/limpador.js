const prompt = require("prompt-sync")();
const cpf = prompt("Digite um cpf: ")
function  limp(){
    return cpf.replaceAll('.', '').replace('-', '')
}
console.log (limp())
