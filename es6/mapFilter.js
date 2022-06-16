// MAP

/* 
  El método map, permite iterar o convertir un arreglo en otro.
  El método map transforma los arreglos.
*/

// Ejemplo -> transformar el arreglo y sumarle 2 a cada elemento

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// const sumar = function(numero ) {return numero + 2};
// const sumar = (numero )=> {return numero + 2};
const sumar = numero => numero + 2;
const multiplicacion = numero => numero * 2;


let numerosMasDos = numeros.map(sumar);
// let numerosMultiplicadosDos = numeros.map(multiplicacion);
// let numerosMultiplicadosDos = numeros.map(function(numero ) {return numero + 2});
let numerosMultiplicadosDos = numeros.map((numero )=> {return numero + 2});


// console.log(numeros);
// console.log(numerosMasDos);
// console.log(numerosMultiplicadosDos);


// Ejemplo 2 Solo requiero obtener el nombre de mi array de objetos

let todosLosAlumnos =[
  {nombre: 'Juan',
  edad: 23},
  {nombre: 'Pedro',
  edad: 15},
  {nombre: 'Maria',
  edad: 90},
  {nombre: 'Adriana',
  edad: 28},
];

const obtenerNombre = alumno => alumno.nombre;

let nombresDeAlumnos = todosLosAlumnos.map(obtenerNombre);

// console.log(todosLosAlumnos);
// console.log(nombresDeAlumnos);

// Ejemplo 3 Convertir los elementos del array a numeros 

let numString = ['245', '10', '78', '50'];
let number= n=>parseInt(n)


let nums1 = numString.map(n=>parseInt(n));
/*
Los principales usos del objeto Number(valor) son convertir un string u
otro valor a uno de tipo numérico; si el argumento no puede ser convertido
a un número, devuelve NaN.
*/
let nums2 = numString.map(n=>Number(n));
let nums3 = numString.map(number);


// console.log(nums1);
// console.log(nums2);
// console.log(nums3);


// FILTER

/*

Nos ayuda a filtrar uno o mas elementos de un array basandose en alguna condicion.
No modicia el arreglo original, nos trae un nuevo arreglo.

*/

// Ejemplo Filtrar los elementos y obetener todos aquiellos que sean mayores o igual a 7

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const filtrarNums = num => num >= 7;

let resultado = nums.filter(filtrarNums);

console.log(nums);
console.log(resultado);

// Ejemplo 2 Solo requiero obtener los alumnos mayores a 30 años

let alumnos =[
  {nombre: 'Juan',
  edad: 23,
  materiaFavorita: 'Historia'},
  {nombre: 'Pedro',
  edad: 15,
  materiaFavorita: 'Ciencias'},
  {nombre: 'Maria',
  edad: 90,
  materiaFavorita: 'Literatura'},
  {nombre: 'Adriana',
  edad: 28,
  materiaFavorita: 'Historia'},
];



const filtrarAlumnos = alumno => alumno.edad > 30;

let alumnosMayores = alumnos.filter(filtrarAlumnos);
let alumnosMayores2 = alumnos.filter(alumno => alumno.edad > 30);



console.log(alumnos);
console.log(alumnosMayores);
console.log(alumnosMayores2);

// Ejemplo 2 Solo requiero obtener los alumnos con la materia favorita de Historia y que tengan más de 25 años

const filtrarAlumnos2 = alumno => alumno.edad > 25 && alumno.materiaFavorita == 'Historia';

let alumnosFiltrados = alumnos.filter(filtrarAlumnos2);

console.log(alumnosFiltrados);