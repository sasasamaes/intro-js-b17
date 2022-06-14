/*Crear una funcion que reciba como
  parametro una oración y defina si
  es palindromo*/


// function esPalidromo(oracion){
//   var oracionesSinEspacio = [];
//   var indice = 0;

//   for(var i=0; i < oracion.length; i++){
//     if (oracion[i] == ' '){
//       console.log("Espacion encontrado en la posicon: " + i);
//     } else {
//       oracionesSinEspacio[indice] = oracion[i].toUpperCase();
//       indice = indice + 1; 
//     }
//   }

//   var indiceAlREVES = (oracionesSinEspacio.length - 1)

//   for(var i = 0; i < oracionesSinEspacio.length; i++){
//     if(oracionesSinEspacio[i] != oracionesSinEspacio[indiceAlREVES]){
//       return "La oracion no es palindromo";
//     } else {
//       indiceAlREVES = indiceAlREVES - 1;
//     }
//   }

//   return "La oracion es palindromo";
// }

// var infoUsuario = prompt("Ingrese una oracion");

// console.log(esPalidromo(infoUsuario))

/*
  Escribe una función que imprima una
  pirámide de astericos como la siguiente: 
                    *
                  * *
                 * * *
                * * * *
               * * * * *  
*/

// function imprimirPiramide(pisos){
//   for (var i = 0; i < pisos; i++){
//     var texto = '';
//     for(var j = 0; j < pisos - i; j++){
//       texto = texto + ' ';
//     }
//     for(var k=1; k <= (2 * i + 1); k++){
//       texto = texto + '*';
//     }
//     console.log(texto)
//   }
// }

// var usuarioPisos = prompt("Ingrese los pisos")

// imprimirPiramide(usuarioPisos)

// Realiza un juego de Piedra Papel Tijera contra el Pc

var opcionUsuario = prompt("Ingrese 1- piedra, 2 - papel o 3 - tijera")

function randomNumber (minimo, maximo){
  var numero = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
  return numero;
}

function juego(opcionUsuario) {
  var opcionPc =  randomNumber(1,3);
  
  if (opcionUsuario != ''){
    if (opcionUsuario == 1){
      if (opcionPc == 1){
        return "Empate, ambos eligieron piedra";
      } else if(opcionPc == 2){
          return "Gana el PC....buhhhh, eligio papel";
      } else if (opcionPc == 3){
        return "Ganaste al Pc :D y eligiste piedra"
      }
    } else if(opcionUsuario == 2){
      if(opcionPc == 1){
        return "Gana el PC....buhhhh, eligio piedra";
      } else if( opcionPc == 2){
        return "Empate, ambos eligieron papel "
      } else if(opcionPc == 3){
        return "Ganaste al Pc :D, eligiste papel"
      }
    } else if (opcionUsuario == 3){
      if(opcionPc == 1){
        return "Gana el PC....buhhhh, piedra";
      } else if(opcionPc == 2){
        return "Ganaste al Pc :D, eligiste papel"
      } else if(opcionPc == 3){
        return "Empate, ambos eligieron tijera "
      }
    }
  }
  return "no entendimos tu respuesta"
}



console.log(juego(opcionUsuario))


