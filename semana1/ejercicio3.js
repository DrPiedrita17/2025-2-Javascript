// Clase 3: Lógica con Condicionales
const { ask } = require('../helpers/input');

async function main() {
  const number = Number(await ask("Ingresa un número:"));

  const multiplo5 = number % 5 === 0;
  const multiplo3 = number % 3 === 0;
  const multiploAmbos = multiplo5 && multiplo3;

  switch(true){
    case multiploAmbos:
      console.log("El numero "+number+" es multilpo de 3 y 5");
    break;
    case multiplo3:
      console.log("El numero "+number+" es multilpo de 3");
    break;
    case multiplo5:
      console.log("El numero "+number+" es multilpo de 5");
    break;
    default:
      console.log("No es multiplo ni de 3 ni de 5");
    break;
  }

 // ctrl + alt + flecha

  // TODO : Convertir a switch
  //const multiplo5 = number % 5 === 0;
  //const multiplo3 = number % 3 === 0;
  //const multiploAmbos = multiplo5 && multiplo3;
  //switch(){
  //  case 1:
  //    break;
  //  default:
  //    break;
  //}
}

main();
