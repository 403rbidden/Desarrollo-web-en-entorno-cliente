try {
    // Solicitar nombre
    var nombre = prompt("Ingresa tu nombre:");

    // Verificar si se ingresó un nombre válido (solo letras)
    if (!/^[a-zA-Z\u00C0-\u024F\u00F1\u00D1\s]+$/]+$/.test(nombre)) {
        throw new Error("Debes ingresar un nombre valido (solo letras, puede ser compuesto).");
    }

    // Solicitar apellido
    var apellido = prompt("Ingresa tu primer apellido:");

    // Verificar si se ingresó un apellido válido (solo letras)
   if (!/^[a-zA-Z\u00C0-\u024F\u00F1\u00D1]+$/.test(apellido)) {
       // Esta expresión regular acepta letras (mayúsculas y minúsculas), espacios y caracteres acentuados, incluyendo la "ñ" y "Ñ"
       // Representa un rango de caracteres Unicode
        throw new Error("Debes ingresar un apellido valido (solo letras).");
    }

    // Solicitar edad y convertir a número
    var edad = parseInt(prompt("Ingresa tu edad:"));

    // Verificar si se ingresó una edad válida (número entre 0 y 130)
    if (isNaN(edad) || edad < 0 || edad > 130) {
        throw new Error("Debes ingresar una edad valida (numero entre 0 y 130 años).");
    }

    // Determinar si es mayor de edad utilizando un operador ternario
    var mensaje = "Hola, " + nombre + " " + apellido + ". Eres " + (edad >= 18 ? "mayor" : "menor") + " de edad.";

    // Mostrar el mensaje
    alert(mensaje);
} catch (error) {
    // Capturar y mostrar errores
    alert("Error: " + error.message);
}
