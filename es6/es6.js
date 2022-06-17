// ES6

// var, let, const

var saludarVar = 'Hola a todos';
var contadorVar = 4;

if(contadorVar > 3){
  var saludarVar = 'Hey';
}

// console.log(saludarVar, 'con var');

// Let -> el valor de la varibale puede cambiar 
let saludarLet = 'Hola a todos';
let contadorLet = 4;

if(contadorLet > 3){
  let saludarLet = 'Hey';
}

// console.log(saludarLet, 'con let');

let ejemplo= 'Soy el ejemplo';
ejemplo='Soy el sol'

// Const -> el valor de la varibale NO puede cambiar 

const nombre = 'Juanito Perez';
// nombre = 'Chachita' // Assignment to constant variable.


// SPREAD OPERATOR ...
// Nos permite generar elementos independientes

// Sintaxis 

// Arrays literales o cadenas
// [...objeto, 'a', 7]

// Llamadas de funciones
// myFuncion(...objeto)

// Objetos literales 
// let clonar = {...obj}



// Arrays literales

// Math.max(), retorna el numero mayor de una lista

console.log(Math.max(23,4,10));

let numeros = [23, 4, 10, 89,34, 190];

console.log(Math.max(numeros[0], numeros[1], numeros[2]))
console.log(Math.max(...numeros));

let numeros2 = [23, 56, 74];

console.log(Math.max(...numeros, ...numeros2));

// Concatenar 2 Arrays o más arrays

let resultadoNum = [...numeros, ...numeros2];

console.log(resultadoNum);

// Copiar un array en otro array 

let copiaNum = [...resultadoNum];
console.log(copiaNum);

// Strings 

let frase = 'Hola soy la frase';

console.log([...frase]);


// Funciones

function suma (a,b,c){
  return a + b + c;
}

console.log(suma(3,5,10));

let numSuma = [56,7,10];

console.log(suma(numSuma[0],numSuma[1],numSuma[2]));
console.log(suma(...numSuma));


// Objetos literales

let persona ={
  nombre: 'Alexis',
  edad: 21
};


// Copiar un objeto en otro objeto 

let clonePersona = {...persona};

console.log(clonePersona);

// Unir 2 objetos en un un objeto

let persona2 ={
  nombre2: 'Jose',
  edad2: 15
};

// No podemos unir asi 2 objetos o mas, con propiedades iguales
// porque se sobreescriben las propiedades
let unirObjetos = {...persona, ...persona2};

console.log(unirObjetos);

// STRING TEMPLATE

// Sintaxis
// ` ${variable}`

let superheroe = {
  nombreSuper: 'Iron Man',
  color: 'rojo',
  edad: 50,
  empresa: 'Marvel' 
}

console.log('Hola soy ' + superheroe.nombreSuper + ' ' + 'tengo ' + superheroe.edad + ' ' + 'mi color favorito es ' + superheroe.color + ' ' + 'trabajo en ' + superheroe.empresa);

console.log(`Hola soy ${superheroe.nombreSuper} tengo ${superheroe.edad} mi color favorito es ${superheroe.color} trabajo en ${superheroe.empresa}`);

let { nombreSuper, color, edad, empresa } = superheroe;
console.log(`Hola soy 👻 ${nombreSuper} tengo ${edad} mi color favorito es ${color} trabajo en ${empresa}`);

//  Funciones flechas o Arrow Functions

// Sintaxis

// ()=>{}
// (param1, param2, param3, ...paramN)=>{ sentencias}
// (param1, param2, param3, ...paramN)=> expresion
// ()=>{ retorne expresion}


// Parentesis OPCIONALES cuando tenemos un solo parametro

// (param1)=>{sentencias}
// param1 => {sentencias}


// Parentesis son OBLIGATORIOS si la funcion no tiene parametros
// ()=>{sentencias}

// Ejemplo

// const sayHello = function (){
//   return alert("Hello")
// };

// const sayHello = ()=>{
//   return alert("Hello")
// };

const sayHello = ()=> alert("Hello");

// sayHello();

// Ejemplo 2

// const resta = function(a,b){
//   return a-b
// }

// const resta = (a,b)=>{
//   return a-b
// }

// Como solo tenemos una expresion quitamos las llaves
const resta = (a,b)=> a-b;

console.log(resta(10, 5));

// Ejemplo 3

//  Convertir celsius a farenheit

const celsius = parseInt(prompt('Ingresa el valor de celsius'));

// const toFarenheit = function(celsiusNumber){
//   const farenheit = (celsiusNumber * 1.8) + 32;
// return alert(`${celsiusNumber} celsius equivale a ${farenheit} farenheit`)
// }

// Como aqui tenemos mas de una expresion no quitamos las llaves
const toFarenheit = (celsiusNumber) => {
  const farenheit = (celsiusNumber * 1.8) + 32;
  return alert(`${celsiusNumber} celsius equivale a ${farenheit} farenheit`)
}


toFarenheit(celsius);

