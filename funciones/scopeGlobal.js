// Scope Global
var edad = 19;
var nombre = 'Juanito Bananas'

function MayorEdad () {
  if (edad >= 18){
    return nombre + " es mayor de edad"
  } else if(edad < 18) {
    return nombre + " es menor de edad"
  }
}
var resultado = MayorEdad()
console.log(resultado)
console.log(edad)