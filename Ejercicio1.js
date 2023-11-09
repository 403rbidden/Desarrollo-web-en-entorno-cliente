//COMPROBADOR MAYORÍA EDAD

// Solicitar nombre
var nombre = prompt("Ingresa tu nombre:");

// Solicitar apellido
var apellido = prompt("Ingresa tu apellido:");

// Solicitar edad y convertir a número
var edad = parseInt(prompt("Ingresa tu edad:"));

/* 
// Saludar y verificar si es mayor de edad
if (edad >= 18) {
    alert("Hola, " + nombre + " " + apellido + ". Eres mayor de edad.");
} else {
    alert("Hola, " + nombre + " " + apellido + ". Eres menor de edad.");
} 
*/

// Determinar si es mayor de edad utilizando un operador condicional ternario
var mensaje = "Hola, " + nombre + " " + apellido + ". Eres " + (edad >= 18 ? "mayor" : "menor") + " de edad.";

// Mostrar el mensaje
alert(mensaje);
