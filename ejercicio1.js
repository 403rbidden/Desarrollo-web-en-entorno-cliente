// Solicitar nombre
var nombre = prompt("Ingresa tu nombre:");

// Solicitar apellido
var apellido = prompt("Ingresa tu apellido:");

// Solicitar edad y convertir a número
var edad = parseInt(prompt("Ingresa tu edad:"));

// Determinar si es mayor de edad utilizando un operador ternario
var mensaje = "Hola, " + nombre + " " + apellido + ". Eres " + (edad >= 18 ? "mayor" : "menor") + " de edad.";

// Mostrar el mensaje
alert(mensaje);
