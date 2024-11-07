let cont = 0
let ncont = 0
for (let num = 2; num <= 100; num++) {
    let primo = true;
    for (let divisor = 2; divisor < num; divisor++) {
        if (num % divisor == 0) {
            primo = false;
            break;
        }
        else{
            primo = true
        }
    }

        if (primo){
            console.log(num + " É primo")
            cont++
        }
        else{

            ncont++
        }
}
console.log("Quantidade de primos é " + cont)
console.log("Quantidade de não primos é " + ncont)   
   


