const Passeio = [
    { idPasseio: "1", dataPasseio: "29/09/2024", dataVolta: "05/10/2024", pago: "Sim" },
    { idPasseio: "2", dataPasseio: "23/04/2024", dataVolta: "27/04/2024", pago: "Não" },
];

let id = Passeio.length+1

function mostrarDados() {
    console.table(Passeio);
}

function inserirPasseio(dataPasseio, dataVolta, pago) {
    if (encontrarPasseio(dataPasseio) >= 0) {
        console.log("ja existe uma viagema agendada para o dia " + dataPasseio);
    } else {
        Passeio.push({idPasseio: id, dataPasseio, dataVolta, pago });
        id++
    }
}

function deletarPasseio(dataPasseio) {
    const indice = encontrarPasseio(dataPasseio);
    if (indice !== -1) {
        Passeio.splice(indice, 1);
        console.log("Viagem deletado com sucesso.");
    } else {
        console.log("O Passeio que você digitou não foi encontrado.");
    }
}

function encontrarPasseio(dataPasseio) {
    return Passeio.findIndex(Passeio => Passeio.dataPasseio === dataPasseio);
}



module.exports = { mostrarDados, inserirPasseio, deletarPasseio, encontrarPasseio }