try {
    // Solicitar nombre
    var nombre = prompt("Ingresa tu nombre:");

    // Verificar si se ingres� un nombre v�lido (solo letras)
    if (!/^[a-zA-Z��\s]+$/.test(nombre)) {
        throw new Error("Debe ingresar un nombre valido (solo letras sin acentos, puede ser compuesto).");
    }

    // Solicitar apellido
    var apellido = prompt("Ingrese su primer apellido:");

    // Verificar si se ingres� un apellido v�lido (solo letras)
   if (!/^[a-zA-Z��]+$/.test(apellido)) {
        throw new Error("Debe ingresar un apellido valido (solo letras sin acentos).");
    }

    // Solicitar edad y convertir a n�mero
    var edad = parseInt(prompt("Ingrese tu edad:"));

    // Verificar si se ingres� una edad v�lida (n�mero entre 0 y 130)
    if (isNaN(edad) || edad < 0 || edad > 130) {
        throw new Error("Debe ingresar una edad valida (numero entre 0 y 130 a�os).");
    }

    // Determinar si es mayor de edad utilizando un operador ternario
    var mensaje = "Hola, " + nombre + " " + apellido + ". Es " + (edad >= 18 ? "mayor" : "menor") + " de edad.";

    // Mostrar el mensaje
    alert(mensaje);
} catch (error) {
    // Capturar y mostrar errores
    alert("Error: " + error.message);
}

