//Escribe un programa que muestre por consola (con un print) los números de 1 a 100 
//(ambos incluidos y con un salto de línea entre cada impresión), sustituyendo los siguientes:
// - Múltiplos de 3 por la palabra "fizz".
// - Múltiplos de 5 por la palabra "buzz".
// - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".



for (let num = 1; num < 100; num++) {
    // const result = num;
    if(num%3 === 0 && num%5 === 0){
        console.log('fizz buzz')
        continue
    }
    if(num%3 === 0){
        console.log('fizz')
        continue
    }
    if(num%5 === 0){
        console.log('buzz')
        continue
    }
    console.log(num)
}

