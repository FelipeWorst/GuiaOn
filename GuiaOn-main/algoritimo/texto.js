const prompt = require("prompt-sync")();
const texto = prompt("Digite um texto: ")

tamTexto = texto.length

console.log ("1 - Exibir o tamanho do texto") 
console.log ("2 - Substituir um caractere  ")
console.log ("-----------------------------") 
const opcao = prompt("Digite o numero da operação desejada: ")

switch(opcao){
    case "1":
        console.log(tamTexto)
        break
    case "2":
        const caractereAntigo = prompt("Digite o caractere que deseja substituir: ").trim();
        const novoCaractere = prompt("Digite o novo caractere: ").trim();
            if (caractereAntigo && novoCaractere) {
                const textoAtualizado = texto.split(caractereAntigo).join(novoCaractere);
                console.log("Texto atualizado: " + textoAtualizado);
            } 
            else {
                console.log("Caractere inválido fornecido.");
            }
            break
    default:
    console.log("Opção inválida. Escolha 1 ou 2.");
    break
} 