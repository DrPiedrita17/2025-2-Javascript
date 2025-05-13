const { ask } = require('../helpers/input.js');

function saludar(nombre){
    console.log(`Hola estimado(a) ${nombre}, tenga un buen dia`);
}

async function main() {
    let limite = Number(await ask("Hasta que numero quieres contar: "));
    let i = 0;

    while ( i <= limite){
        console.log(i);
        i++;
    }

    console.log("Ahora cuenta regresiva");

    i = limite;

    while ( i >= 0){
        console.log(i);
        i--;
    }

    const personas = [
        "Juan",
        "Roberto",
        "Maria",
        "Alicia",
        "Esteban",
        "Moises",
        "Angela"
    ];

    console.log("Ascendente");
    for (let i = 0; i < personas.length; i++){
        saludar(personas[i]);
    }
    console.log("Descendente");
    for (let i = personas.length - 1; i >= 0; i--){
        saludar(personas[i]);
    }
    console.log("foreach");
    personas.forEach((persona) => saludar(persona));

    const frutas = [
        "fresas",
        "mangos",
        "kiwis",
        "manzanas",
        "uvas"
    ];
    const cajon = Number(await ask("¿Que cajon quieres abrir? (1-5) "));

    for(let j = 1; j <= 5; j++){
        if(j === cajon){
            console.log("En el cajon hay", frutas[j-1]);
        }
    }
}

main();