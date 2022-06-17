// Objetos 

/*
Un objeto es una colección de propiedades.
Es una asociación entre una propiedad (clave) y un valor,
este puede ser de cualquiert tipo de dato, 
incluyendo objtos y funciones.
Cuando el valor de la propiedad es una función 
se le conoce como método.
*/

// Objetos literales

/*
Se les denomina objetos literales, porque nosotros 
lo indicamos al momento de crear la variable.
*/


// Sintaxis

/*

var myObj = {
  color: 'blue', --> string
  edad: 30, -->numero
  esCaro: true, --> boolean
  alumnos: ['Juan', 'Jose', 'Adriana'], --> array
  correr: funcion(){codigo de la funcion} --> método
};

*/

// Ejemplo

var perro = {
  color: 'café',
  nombre: 'Nilo',
  numPatas: 4,
  edad: 5,
  /*
  Cuando utilizamos metodos y queremos hacer referencia a
  alguna de las propiedades dentro del metodo,
  deberemos utilizar la palabra reservada this seguida de un punto 
  y el nombre de la propiedad.
  This hace referencia al mismo objeto
  */
  ladra: function(){alert('Guau Guau !! Soy ' + this.nombre)},
  raza: 'pitbull',
  tamaño: 'mediano',
  _id: 12345,
  amigosPerrunos: ['Aria', 'Tuna', 'Duque', 'Mariposa', 'Wally']
};

console.log(perro);

// Como agregar una propiedad

perro.vacunación = true;

console.log(perro);


// Como ingresamos a una propiedad

// 1. Notación de puntos 

console.log(perro.edad);
console.log(perro._id);
console.log(perro.amigosPerrunos);

//--> acceder a un elemento de array
console.log(perro.amigosPerrunos[1]);

// acceder al método
// console.log(perro.ladra());



// 2. Notación de corchetes
console.log(perro['edad']);
console.log(perro['_id']);
console.log(perro['amigosPerrunos']);
console.log(perro['amigosPerrunos']);
//--> acceder a un elemento de array
console.log(perro['amigosPerrunos'][1]);



// Como eliminar una propiedad 
delete perro.color

console.log(perro)



// Destructuración

var {nombre, color, numPatas} = perro;
console.log(nombre);
console.log(color);

// Formas de concatenar

/*
'string' + variables + 'string' + variables
`string ${variables} string ${varibales}`

*/







