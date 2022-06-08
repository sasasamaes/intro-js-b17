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


// var contador = 0;

// do{
//   contador++; 
//   console.log(contador);
// } while (contador < 10);



// FOR

// Sintaxis

/*

for( var index = 0; index <= 10; index++ ) {
  codigo de ejecucion
  ejemplo: console.log(index)
}

*/


// Ejercicio -> Imprimir en consola los numeros de 1 al 10

// for(var index = 1; index<=10; index++ ) {
//   console.log(index)
// }


// Ejercicio -> Imprimir los elementos de un array

// var frutas = ['manzana', 'uva', 'granada', 'pera', 'mango', 'platano', 'melón'];
// console.log(frutas.length)

// for (var index = 0; index<=frutas.length-1; index++){
//   console.log(frutas[index])
// }

// Modificar el for para que inicie desde granada

// for (var index = 2; index<=frutas.length-1; index++){
//   console.log(frutas[index])
// }

// FizzBuzz

/*
Escribir un programa que 
* 1->muestre en pantalla los números del 1 al 100, 
* 2-> sustituyendo los múltiplos de 3 por la palabra fizz”, 
* 3-> los múltiplos de 5 por “buzz” y 
* 4-> los múltiplos de ambos, es decir, 
los múltiplos de 3 y 5 (o de 15), por la palabra 
“fizzbuzz”.
*/

for(var index = 1; index <= 100; index++){
  
  if (index % 3 == 0 && index % 5 == 0){
    console.log('fizzbuzz');
  } else if(index % 3 == 0){
    console.log('fizz');
  } else if (index % 5 == 0) {
    console.log('buzz');
  } else {
    console.log(index);
  }
}
