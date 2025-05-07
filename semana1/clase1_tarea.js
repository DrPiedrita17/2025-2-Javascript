const { ask } = require('../helpers/input.js');

async function main(){
    const numA = Number(await ask('Ingresa el primer numero: '));
    const numB = Number(await ask('Ingresa el segundo numero: '));
    
    console.log(`La suma de ${numA} + ${numB} es igual a: ` + (numA + numB));
    console.log(`La resta de ${numA} - ${numB} es igual a: ` + (numA - numB));
    console.log(`El producto de ${numA} * ${numB} es igual a: ` + (numA * numB));
    console.log(`El cociente de ${numA} / ${numB} es igual a: ` + (numA / numB));
}

main();

