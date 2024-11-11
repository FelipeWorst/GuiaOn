let notas = [
    [8.5, 7.0, 9.0], // Notas do Aluno  1
    [6.5, 5.0, 10.0], // Notas do Aluno 2
    [7.5, 6.5, 9.0] // Notas do Aluno 3
] 

let medias = []

for (let i = 0; i < notas.length; i++){
    let soma = 0
    for(let j = 0; j < notas[i].length; j++){
        soma += notas[i][j]
    }
    let media = soma / notas.length
    medias.push(media)
}  
if(medias[0]>=7){
    console.log("Media aluno 1: " + medias[0].toFixed(2) + "  - Aluno aprovado")
  }
  else{
    console.log("Aluno Reprovado, media de " + medias[0].toFixed(2))
  }
  if(medias[1]>=7){
    console.log("Media aluno 2: " + medias[1].toFixed(2) + "  - Aluno aprovado")
  }
  else{
    console.log("Aluno Reprovado, media de " + medias[1].toFixed(2))
  }
  if(medias[2]>=7){
    console.log("Media aluno 3: " + medias[2].toFixed(2) + "  - Aluno aprovado")
  }
  else{
    console.log("Aluno Reprovado, media de " + medias[2].toFixed(2))
  }
