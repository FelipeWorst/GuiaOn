const array = ['peixe', 'elefante', 'gato']
animalMaior = array[0]
for(let i = 0; i < array.length; i++){
    if (array[i].length < animalMaior.length){
        animalMaior = array[i]
    }
 
}
console.log("A maior palavra do array é " + animalMaior)