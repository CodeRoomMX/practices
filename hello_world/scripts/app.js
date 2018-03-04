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