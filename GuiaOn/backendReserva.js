const Reserva = [
    { idReserva: 1, dataReserva: "29/09/2024", dataVolta: "05/10/2024", pago: "Sim" },
    { idReserva: 2, dataReserva: "23/04/2024", dataVolta: "27/04/2024", pago: "Não" },
];

let id = Reserva.length+1

function mostrarDados() {
    console.table(Reserva);
}

function inserirReserva(idReserva, dataReserva, dataVolta, pago) {
    if (encontrarReserva(dataReserva) >= 0) {
        console.log("ja existe uma reserva agendada para o dia " + dataReserva);
    } else {
        Reserva.push({idReserva: id, dataReserva, dataVolta, pago });
        id++
    }
}

function deletarReserva(dataReserva) {
    const indice = encontrarReserva(dataReserva);
    if (indice !== -1) {
        Reserva.splice(indice, 1);
        console.log("Reserva deletado com sucesso.");
    } else {
        console.log("O Reserva que você digitou não foi encontrado.");
    }
}

function encontrarReserva(dataReserva) {
    return Reserva.findIndex(Reserva => Reserva.dataReserva === dataReserva);
}



module.exports = { mostrarDados, inserirReserva, deletarReserva, encontrarReserva }