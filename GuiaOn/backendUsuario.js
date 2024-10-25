const usuarios = [
    { nome: "João Silva", email: "joao@example.com", senha: "2412315", tipo: "Guia" },
    { nome: "Larissa da Silva", email: "larissa@example.com", senha: "545124", tipo: "Usuario" },
];

function mostrarDados() {
    console.table(usuarios);
}

function inserirUsuario(nome, email, senha, tipo) {
    if (encontrarUsuario(email) >= 0) {
        console.log("O usuário com email " + email + " já está cadastrado.");
    } else {
        usuarios.push({ nome, email, senha, tipo });
    }
}

function deletarUsuario(email) {
    const indice = encontrarUsuario(email);
    if (indice !== -1) {
        usuarios.splice(indice, 1);
        console.log("Usuário deletado com sucesso.");
    } else {
        console.log("O usuário que você digitou não foi encontrado.");
    }
}

function encontrarUsuario(email) {
    return usuarios.findIndex(usuario => usuario.email === email);
}



module.exports = { mostrarDados, inserirUsuario, deletarUsuario, encontrarUsuario }