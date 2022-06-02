/*

Ejercicios:

*/

// Solicitar al usuario que responda a la pregunta (¿Eres bellisimo/a?“), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.
// var pregunta = prompt('¿Eres bellisimo/a?');

// if(pregunta == "si" || pregunta == "Si" || pregunta == "SI" || pregunta == "sI" || pregunta == "Sí" || pregunta == "SÍ"){
//     alert('Ciertamente');
// } else if (pregunta == "no" || pregunta == "No" || pregunta == "NO" || pregunta == "nO"){
//   alert("No te creo")
// } else {
//   alert("No entiendo")
// }
//Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm

// var numeroUsuario = prompt('Ingresa un número');

// if(numeroUsuario % 2 == 0){
//   alert(numeroUsuario + ' número es divisible entre 2');
// } else {
//   alert(numeroUsuario + ' número no es divisible entre 2');
// }
//Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir “Ganaste un premio”, en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.

// var numeroCliente = prompt('Ingresa un número de cliente');

// if(numeroCliente == "1000")
// {
//   alert('Ganaste un premio');
// } else {
//   alert(numeroCliente + ' Lo sentimos, sigue participando');
// }

//Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.
// var num1 = prompt('Ingrese el primer numero')
// var num2 = prompt('Ingrese el segundo numero')

// if (num1 > num2){
//   alert("El " + num2 + " es menor");
// } else {
//   alert("El "+ num1 + " es menor")
// }

//Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

// var diaSemana = prompt('Ingrese un dia de la semana')

// if (diaSemana == "lunes" || diaSemana == "Lunes" || diaSemana == "LUNES"){
//   alert('Es lunes');
// } else if (diaSemana == "martes" || diaSemana == "Martes" || diaSemana == "MARTES"){
//   alert('Es martes');
// } else if (diaSemana == "miercoles" || diaSemana == "Miercoles" || diaSemana == "MIERCOLES"){
//   alert('Es miercoles');
// } else if(diaSemana == "jueves" || diaSemana == "Jueves" || diaSemana == "JUEVES"){
//   alert('Es jueves');
// } else if (diaSemana == "viernes" || diaSemana == "Viernes" || diaSemana == "VIERNES"){
//   alert('Es viernes');
// } else if (diaSemana == "sabado" || diaSemana == "Sabado" || diaSemana == "SABADO" || diaSemana == "domingo" || diaSemana == "Domingo" || diaSemana == "DOMINGO"){
//   alert('Es fin de semana :D');
// } else {
//   alert("No te entiendo")
// }


// Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. 
// Considerar el caso en que 2 números sean iguales.

// var num1 = prompt('Ingresa el primer número');
// var num2 = prompt('Ingresa el segundo número');
// var num3 = prompt('Ingresa el tercer número');

// if( num1 >= num2 && num1 >= num3 ){
//   console.log('El número mayor es : ' + num1)
// } else if(num2 >= num1 && num2 >= num3){
//   console.log('El número mayor es : ' + num2)
// } else {
//   console.log('El número mayor es : ' + num3)
// }


// Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número 
// efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima 
// “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, 
// y por último, “excelente” si es 10.

// 1 signo = -> asignación
// 2 signos = -> comparación

// var calificacion = prompt('Dame tu calificación entre 1 y 10');

// if( calificacion > 10){
//   console.log("Error!!! Calificación fuera del rango")
// } else if(calificacion == 10){
//   console.log("Excelente")
// } else if(calificacion == 9){
//   console.log("Bien")
// } else if(calificacion >= 6 && calificacion <= 8) {
//   console.log("Regular")
// } else {
//   console.log("Reprobado")
// }

// Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida
// marca de comida rápida cuánto le costará en función del topping que elija.
// El helado sin topping cuesta 50 MXN.
// El topping de oreo cuesta 10 MXN.
// El topping de KitKat cuesta 15 MXN.
// El topping de brownie cuesta 20 MXN.
// En caso de no disponer del topping solicitado por el usuario, el programa le indicará
// “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado
// sin ningún topping.

// var opcion = prompt("¿Tu helado lo quieres con toppings? \n '1' El helado sin topping cuesta 50 MXN. \n '2' El topping de oreo cuesta 10 MXN. \n '3' El topping de KitKat cuesta 15 MXN. \n '4' El topping de brownie cuesta 20 MXN.");
// var helado = 50;
// var oreo = 10;
// var kitKat = 15;
// var brownie = 20;


// if(opcion == 1 ){
//   console.log("El precio del helado es de " + helado )
// } else if( opcion == 2 ){
//   console.log("El precio del helado es de: ",  helado + oreo )
// } else if( opcion == 3 ){
//   console.log("El precio del helado es de: ",  helado + kitKat )
// } else if( opcion == 4 ){
//   console.log("El precio del helado es de: ",  helado + brownie )
// } else{
//   console.log('no tenemos este topping, lo sentimos.')
// }



// Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar
// aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente
// de acuerdo a la opción elegida.
// El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual:
// Course: $4999 MXN
// Carrera $3999 MXN
// Master: $2999 MXN

var elección = prompt("Escribe el programa que te interese \n Course \n Carrera \n Master").toLowerCase()
// Transformar strings a Mayusculas
// var elección = prompt("Escribe el programa que te interese \n Course \n Carrera \n Master").toUpperCase()


if (elección == 'course'){
  document.write(" El costo es de $4999 MXN mensuales")
}else if( elección == 'carrera'){
  document.write(" El costo es de $3999 MXN mensuales")
}else if( elección == 'master'){
  document.write(" El costo es de $2999 MXN mensuales")
} else {
  alert(" Programa incorrecto")
}
