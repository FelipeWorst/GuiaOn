let vendas = [250, 400, 150, 300, 600, 200, 550];
maiorValor = vendas[1]
let media = 0
let somaVendas = 0
for(let i = 0; i < vendas.length; i++){
    if (vendas[i] > maiorValor){
        maiorValor = vendas[i]
    }
somaVendas += vendas[i]
}
media = somaVendas / vendas.length
console.log(maiorValor)
console.log(media)