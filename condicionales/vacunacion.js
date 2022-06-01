var edad = 25;
var fronterizo = false;
var embarazada = true;
var semanasEmbarazo = 9;

if (edad >= 18 && fronterizo == true){
  console.log("Si puedes vacunarte, por ser mayor de 18 y vivir en un municipio fronterizo");
} else if(embarazada == true && edad >= 18 && semanasEmbarazo >= 9){
  console.log("Si te puedes vacunar, por estar embarazada y con mas de 9 semanas de gestacion")
} else if(edad >= 30){
  console.log("Si puedes vacunarte, por ser mayor de 30")
} else {
  console.log("No puedes vacunarte")
}
