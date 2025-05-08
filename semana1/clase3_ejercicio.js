// Día de la semana según número
// Función que devuelve el día de la semana según un número del 1 al 7
// Ejercicio: Crear un programa que reciba un número del 1 al 7 y devuelva el día de la semana correspondiente (1 = Lunes, 2 = Martes, etc.).

const { ask } = require('../helpers/input');

async function main() {
  const dia = Number(await ask("Ingresa un número del 1 al 7:"));
  const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

  // TODO : Implementar la lógica para mostrar el día de la semana según el número ingresado
  // Ejemplo: Si el usuario ingresa 1, debe mostrar "Lunes"

  switch(dia){
    case 1:
      console.log("Lunes");
    break;
    case 2:
      console.log("Martes");
    break;
    case 3:
      console.log("Miercoles");
    break;
    case 4:
      console.log("Jueves");
    break;
    case 5:
      console.log("Viernes");
    break;
    case 6:
      console.log("Sabado");
    break;
    case 7:
      console.log("Domingo");
    break;
    default:
      console.log("Dia inexistente");
    break;
  }
}

main();