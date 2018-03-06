// Aquí va a ir mi primer programa de JS

/*
 * Este es un comentario multilinea
 * puedo poner un párrafo
 * y todo va a seguir siendo un comentario
 */

var num1 = 3;
var num2 = 5;

console.log(num1 + num2);
console.log(num1 -  num2);
console.log(num1 * num2);
console.log(num1 / num2);

var nombre = "Jon";
var apellido = "Doe";

console.log(nombre+" "+apellido);

var encendido = true;
console.log(encendido);
encendido = false;
console.log(encendido);

var primerApellido = "Perez";
var segundoApellido = "Perez";
console.log("Comparar strings");
console.log(primerApellido === segundoApellido);
console.log(primerApellido !== segundoApellido);

var alumnos = 14;
var asistencia = 12;
console.log("Comparar números");
console.log(alumnos < asistencia);
console.log(alumnos > asistencia);

var edad = 18
console.log("¿Es mayor de edad?", edad >= 18);

var limpiarCuarto = false;
var tieneDinero = true;
console.log("¿Puedo salir?", limpiarCuarto && tieneDinero);
limpiarCuarto = true;
tieneDinero = false;
console.log("¿Puedo salir?", limpiarCuarto && tieneDinero);
limpiarCuarto = false;
tieneDinero = false;
console.log("¿Puedo salir?", limpiarCuarto && tieneDinero);
limpiarCuarto = true;
tieneDinero = true;
console.log("¿Puedo salir?", limpiarCuarto && tieneDinero);

var lista = [
  [1, 'Jabón'],
  [2, 'Papas'],
  [3, 'kg de guayaba'],
  [1, 'Escoba'],
  [2, 'Llantas'],
  [3, 'kg de mango']
];

console.log('Descripción del segundo item de la lista', lista[1][1]);
console.log('Kilos de guayaba', lista[2][0]);
console.log('Cantidad de escobas', lista[3][0]);
console.log('Cantidad de llantas', lista[4][0]);
console.log('Cantidad del último item de la lista', lista[lista.length - 1][0]);

for(var i = 1; i <= 10; i++){
  console.log(i);
}


for(var i = 0; i <= lista.length - 1; i++){
  console.log(lista[i][0]+" x "+lista[i][1]);
}

for(var i = 0; i <= lista.length - 1; i++){
  if(lista[i][0] >= 2){
    console.log('Vende', lista[i][1]);
  }else{
    console.log('Compra', lista[i][1]);
  }
}
