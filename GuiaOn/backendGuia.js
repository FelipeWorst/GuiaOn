const prompt = require("prompt-sync")()
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


module.exports = {encontrarguia, deletarguia, inserirguia, mostrarDados}