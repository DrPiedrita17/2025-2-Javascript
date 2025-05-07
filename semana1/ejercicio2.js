// Clase 2: Operadores y Condicionales
const { ask } = require('../helpers/input');

async function main() {

  const age = Number(await ask ("¿Cuantos años tienes?"));
  const genere = await ask("¿Cual es tu genero? (masculino/femenino)");

  if(age <= 12 && genere === "masculino"){
    console.log("Eres un hombre menor de edad");
  } else if((age > 12 && age <= 18) && genere !== "femenino"){
    console.log("Eres un hombre adolescente");
  } else if((age > 18 && age <= 60) && genere === "masculino"){
    console.log("Eres un hombre adulto");
  } else if(age > 60 && genere === "masculino"){
    console.log("Eres un hombre adulto mayor");
  } else{
    console.log("No se cumplen lños valores de busqueda");
  }
}

main();
