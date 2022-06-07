// Estructuras de control de repetición para

// WHILE

// Sintaxis

/*
while(condición){
  codigo a ejecutar
}
*/

// Ejemplo -> imprimir números del 0 al 10 en la consola.

// var indice = 0;

// while(indice < 11){
//   console.log(indice);
//   indice++;
// }

// Ejemplo -> revisaremos si el usuario intriduce un valor o no

// var arreglo = [];
// var userInput;

// while(!(userInput == "")){ 
//   console.log('userInput antes de prompt',userInput)
//   // le pedimos al usuario que ingrese un elemento
//   userInput = prompt("Ingresa cualquier caracter");
//   // El elemento que nos dio el usuario, lo vamos a agregar al array arreglo con el método push
//   arreglo.push(userInput);
//   console.log('userInput despues de prompt',userInput)

// }

// console.log('El usuario me dio estos valores ' + arreglo);

// DO WHILE

// Sintaxis

/*
do{
  codigo a ejecutar
}
while (condicion)
*/

// Ejemplo -> Conteo de números del 1 al 10 en consola


var contador = 0;

do{
  contador++; 
  console.log(contador);
} while (contador < 10);

