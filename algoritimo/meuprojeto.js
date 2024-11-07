console.log ("Menu GuiaOn")
console.log ("-----------")
console.log ("1 - Avaliações")
console.log ("2 - Minhas reservas")
console.log ("3 - Suporte")
console.log ("4 - Cadastro de guias")
console.log ("5 - Viagens")
const prompt = require("prompt-sync")()
console.log ("-----------")
const texto = prompt("Escolha uma avaliação: ")
switch (texto) {
case "1" :
    avaliar ()
    break
case "2" :
    reservas ()
    break
case "3" :
    suporte ()
    break
case "4" :
    guia ()
    break
case "5":
    viagem () 
    break
}

function avaliar(){
    console.log ("1 Estrela")
    console.log ("2 Estrelas")
    console.log ("3 Estrelas")
    console.log ("4 Estrelas")
    console.log ("5 Estrelas")
    const avalia=prompt("Escolha uma avaliação: ")
    switch (avalia) {
       case "1" :
           console.log ("Sua escolha foi 1 estrela")
           break
       case "2" :
           console.log ("Sua escola foi 2 estrelas")
          break
       case "3" :
           console.log ("Sua escolha foi de 3 estrelas")
           break
       case "4" :
           console.log ("Sua escolha foi de 4 estrelas")
           break
       case "5" :
           console.log ("Sua escolha foi de 5 estrelas")
           break
    }
}

function  reservas () {
console.log ("Suas reservas")
console.log ("1 - Ver viagem a SC")
console.log ("2 - Ver viagem a SP")
console.log ("3 - Ver viagem a RJ")

const reserva = prompt("Escolha uma reserva para visualizar: ")
switch (reserva) {
case "1" :
    console.log ("Está reserva esta ativa")
    break
case "2" :
    CONSOLE.log ("Está reserva esta ativa")
    break
case "3" :
    console.log ("Está reserva esta off")
    break
}
}

function suporte (){
console.log ("Fale com o suporte")
const sup=prompt("Digite o seu problema: ")
    console.log ("Aguarde alguem do suporte tecnico já ira entrar em contato!")
}

function guia  () { 
console.log ("Guias cadastrados")
console.log ("Renato")
const nome = prompt("Faça seu cadastro com seu nome: ")
    console.log ("Nome registrado, é um prazer telo em nosso time " + nome)
}

function viagem () {

    console.log (" 1 - Viagem a New York ")
    console.log (" 2 - Viagem a China ")
    console.log (" 3 - Viagem ao Japão ")
    const texto=prompt("Escolha uma viagem: ")
    switch (texto) {
    case "1" :
        console.log ("Essa viagem custa R$1.000")
        break
    case "2" :
        console.log ("Essa viagem custa R$2.000")
        break
    case "3" :
        console.log ("Essa viagem custa R$1.500")
    }
}