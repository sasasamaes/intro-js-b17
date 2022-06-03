//  ARRAYS

// Colección ordenda de datos, se emplea para almacenar múltiples valores en una sola variable

// SINTAXIS

// var nombreDelArray = [];

// Los arrays permiten diferentes tipos de datos
// var multiplesElementos = ['Marcos', 'Daniel', 21,true,56, [1,2,['naranja', 'rojo'],4], {nombre:'Omar'}];
// console.log(multiplesElementos);

// Acceder a los elementos de un array 
// La posicion de los arrays empieza en 0

// var colores = ['negro', 'verde', 'rojo', 'azul', 'naranja'];

// console.log(colores[2]);

// Modificar un elemento de un array

// console.log(colores);
// colores[2]= 'azul';
// console.log(colores);

// Metodos de los Arrays

// 1. Length
//  Devuelve el número total de elementos en un arreglo.

// console.log(colores.length);

// 2. Push
//  Agrega un elemento al final de nuestro array

// console.log(colores);
// colores.push("Morado");
// console.log(colores);

// 3. Pop
//  Elimina el ultimo elemento de nuestro array

// console.log(colores);
// colores.pop();
// console.log(colores);

// 4. Unshift
//  Agrega un elemento al inicio de nuestro array 

// console.log(colores);
// colores.unshift('rosa');
// console.log(colores);

// 5. Shift
//  Elimina el primer elemento de nuestro array

// console.log(colores);
// colores.shift();
// console.log(colores);

// 6. Split
//  Divide un string en un array, tomando como referencia donde se encuentre un caracter indicado

// var alumnos = 'Deyanira,Cristobal,Marcos,Mezly,Jose';
// var arrayDeAlumnos = alumnos.split(',');

// var alumnos = 'Deyanira/Cristobal/Marcos/Mezly/Jose';
// var arrayDeAlumnos = alumnos.split('/');

// var alumnos = 'Deyanira Cristobal Marcos Mezly Jose';
// var arrayDeAlumnos = alumnos.split(' ');

// var alumnos = 'Deyanira,Cristobal,Marcos,Mezly,Jose';
// var arrayDeAlumnos = alumnos.split('M');

// console.log(arrayDeAlumnos);

// 7. Slice
//  Quita una parte del array y devulve un nuevo array

// Sintaxis
// nombreDeArray.slice(posición inicial, posición final);

// console.log(colores);
// var quitarColores = colores.slice(2);
// var quitarColores = colores.slice(2,4);
// var quitarColores = colores.slice(3);
// console.log(colores);
// console.log(quitarColores);

// 8. Splice
//  Agregar o borrar elementos de un array, este si modifica el arreglo original

// Sintaxis
// nombreDeArray.splice(indice,numero de elementos a eliminar, elementos a agregar);

// No borrando elementos, pero agregando elementos

// console.log(colores);
// console.log(colores.splice(2,0,'Amarillo','Peru'));
// console.log(colores);

// Borrando elementos

// console.log(colores);
// console.log(colores.splice(2,1));
// console.log(colores);

// Borrando un elemento y agregando un elemento
// console.log(colores);
// console.log(colores.splice(2,3,'rosa'));
// console.log(colores);

// Sort
// Ordena la lista de forma ascendente (A-Z) por defecto

var verduras =['Cebolla', 'Brocoli', 'Papas', 'Col', 'Zanahoria']

// console.log(verduras);
// verduras.sort();
// console.log(verduras);

// Cuando ordenemos números, le pasaremos al método sort una funcion para ajustar el orden
// funcion(a,b){return a-b}
// (a,b)=>{return a-b}

// var numeros = [5, 14, 7, 25, 47, 120];

// console.log(numeros);
// numeros.sort();
// numeros.sort((a,b)=>{return a-b});
// 5,14 -> 5-14 = -9 por lo tanto, mi elemento a (5) se situara en un indice menor a mi elemento b (14) => 5,14
// 14,7 -> 14-7 = 7 por lo tanto, mie elemtento b (7) se situara en un indice menor a mi elelento a (14) =>7,14
// console.log(numeros);

// Cuando ordenamos strings con mayusculas y minusculas

// var alumnos = ['Abbad', 'alexis', 'Chayanne', 'daniel', 'Dreyco'];
// console.log(alumnos);
// alumnos.sort((a,b)=>{
//   if(a.toLowerCase() < b.toLowerCase()) return -1
//   if(a.toLowerCase() > b.toLowerCase()) return 1
//   return 0
// });
// console.log(alumnos);

// Reverse
// Coloca los elementos del arreglo al revés. Este método altera el arreglo original.

// console.log(verduras);
// verduras.reverse();
// console.log(verduras);


// Concat
//  Este método une (concatena) el contenido de 2 arreglos existentes. No modifica dichos arreglos, si no que devuelve uno nuevo.

var paises = ['Mexico', 'EUA', 'Chile'];
var platillos = ['Pozole', 'Papatzules', 'Chanwis'];

// var unionDeArrays = paises.concat(platillos);
// var unionDeArrays = platillos.concat(paises);
var unionDeArrays = platillos.concat(['Juan', 'Pedro']);


console.log(unionDeArrays);

// Link para explorar más metodos 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array








