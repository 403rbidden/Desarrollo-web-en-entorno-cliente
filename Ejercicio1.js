// Solicitar nombre
var nombre = prompt("Ingresa tu nombre:");

// Solicitar apellido
var apellido = prompt("Ingresa tu apellido:");

// Solicitar edad y convertir a número
var edad = parseInt(prompt("Ingresa tu edad:"));

// Saludar y verificar si es mayor de edad
if (edad >= 18) {
    alert("Hola, " + nombre + " " + apellido + ". Eres mayor de edad.");
} else {
    alert("Hola, " + nombre + " " + apellido + ". Eres menor de edad.");
}
