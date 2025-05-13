// Ejercicio: Pedir al usuario su fecha de nacimiento
//
// Instrucciones:
// 1. Mostrar en pantalla los días equivalentes a la edad actual del usuario
// 2. Mostrar en pantalla los meses equivalentes a la edad actual del usuario
// 3. Mostrar los años que tiene el usuario.

const { ask } = require('../helpers/input');

function diffDays(actualDate, birthDate){
    const diff = actualDate - birthDate;
    const edadEnDias = Math.floor(diff / (1000 * 60 * 60 * 24));

    return edadEnDias;
}

function diffMonths (dias){
    const edadEnMeses =Math.floor(dias / 30);
    return edadEnMeses;
}

function diffYears (meses){
    const edadEnAños = Math.floor(meses / 12);
    return edadEnAños;
}

async function main() {
    const actualDate = new Date();

    const birthDateDay = await ask("¿Cuál es el dia de tu fecha de nacimiento? ");
    const birthDateMonth = await ask("¿Cuál es el dia de tu fecha de nacimiento? ");
    const birthDateYear = await ask("¿Cuál es el dia de tu fecha de nacimiento? ");

    const birthDate = new Date(`${birthDateYear}-${birthDateMonth}-${birthDateDay}`);

    console.log("Haz vivido aproximadamente: ");
    console.log(`${diffDays(actualDate, birthDate)}  días`);
    console.log(`${diffMonths(diffDays(actualDate, birthDate))}  meses`);
    console.log(`${diffYears(diffMonths(diffDays(actualDate, birthDate)))}  años`);
}

main();