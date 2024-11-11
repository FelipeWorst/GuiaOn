const prompt = require("prompt-sync")();
const guia = [
    {guia: "Marcelo", viagens: 2},
    {guia: "Jeferson", viagens: 4},
    {guia: "Alice", viagens: 1},
    {guia: "Rodrigo", viagens: 6},
];

function mostrarDados(){
    console.table(guia)
}

function inserirguia(nomeguia, popguia){

    if(encontrarguia(nomeguia) >= 0){
        console.log("o nome " + nomeguia + " já esta na sua lista!")
    }
    else{
        guia.push({guia: nomeguia, viagens: popguia})
    }
}
function deletarguia(indice){
    if(indice != -1){
        guia.splice({guia: indice},1)
    }
    else
    console.log("guia nao encontrado")
}

function encontrarguia(nomeguia){
    let indice = -1
    for(let i = 0; i < guia.length; i++)
        if(guia[i].guia == nomeguia){
            indice = i
    }
    return indice
}

function menu(){
    console.log("=============================")
    console.log("[1] EXIBIR Guias CADASTRADOS")
    console.log("[2] INSERIR guia")
    console.log("[3] DELETAR guia")
    console.log("[4] ENCONTRAR guia")
    console.log("[5] SAIR")
    console.log("")
}

let opcao = true
while (opcao){
    menu()

    let escolha = prompt("Digite a opção desejada: ")
    
    switch(escolha){
        case "1":
            mostrarDados()
            break
        
        case "2":
            nomeguia = prompt("Digite o nome do guia: ")
            popguia = parseInt(prompt("Digite a viagens do guia:"))
            inserirguia(nomeguia, popguia)
            break

        case "3":
            nomeguia = prompt("Digite o nome do guia: ")
            deletarguia(encontrarguia(nomeguia))
            break
            
        case "4":
            nomeguia = prompt("Digite o nome do guia: ")
            indice = encontrarguia(nomeguia)
            if (indice === -1) {
                console.log("guia não encontrado");
            } else {
                console.log("guia encontrado no índice: " + indice);
            }
            break

        case "5":
            console.log("Você saiu")
            opcao = false
            break

        default:
            console.log("[ERRO] Digite uma opção válida")
    }       
}