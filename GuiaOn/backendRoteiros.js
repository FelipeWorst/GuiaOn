const Roteiro = [
    { idRoteiro: 1, dataRoteiro: "29/09/2024", dataVolta: "05/10/2024", descricao: "Passeio maravilhoso" },
    { idRoteiro: 2, dataRoteiro: "23/04/2024", dataVolta: "27/04/2024", descricao: "Passeio para as ilhas maldivas" },
];

let id = Roteiro.length+1

function mostrarDados() {
    console.table(Roteiro);
}

function inserirRoteiro(dataRoteiro, dataVolta, descricao) {
    if (encontrarRoteiro(dataRoteiro) >= 0) {
        console.log("ja existe uma viagema agendada para o dia " + dataRoteiro);
    } else {
        Roteiro.push({idRoteiro: id, dataRoteiro, dataVolta, descricao });
        id++
    }
}

function deletarRoteiro(dataRoteiro) {
    const indice = encontrarRoteiro(dataRoteiro);
    if (indice !== -1) {
        Roteiro.splice(indice, 1);
        console.log("Roteiro deletado com sucesso.");
    } else {
        console.log("O Roteiro que você digitou não foi encontrado.");
    }
}

function encontrarRoteiro(dataRoteiro) {
    return Roteiro.findIndex(Roteiro => Roteiro.dataRoteiro === dataRoteiro);
}



module.exports = { mostrarDados, inserirRoteiro, deletarRoteiro, encontrarRoteiro }