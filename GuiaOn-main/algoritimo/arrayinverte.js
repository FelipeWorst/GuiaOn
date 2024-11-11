const arrayOriginal = [10, 20, 30, 40, 50];
const arrayInvertido = [];
for (let i = arrayOriginal.length -1 ; i >= 0; i--) {
    arrayInvertido[arrayOriginal.length - i - 1] = arrayOriginal[i]
    console.log(arrayOriginal[i])
}

console.log(arrayInvertido)