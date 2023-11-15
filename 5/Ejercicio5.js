//CALCULADORA EDAD EN A�OS

// Funci�n para calcular la edad
function calcularEdad() {
    // Obtener el valor de la fecha de nacimiento
    const fechaNacimientoString = document.getElementById('fechaNacimiento').value;

    // Verificar el formato utilizando una expresi�n regular.
    // Patron dd/mm/aaaa
    const formatoCorrecto = /^\d{2}\/\d{2}\/\d{4}$/.test(fechaNacimientoString);

    // Si el formato es correcto, calcular la edad
    if (formatoCorrecto) {
        const edad = obtenerEdad(fechaNacimientoString);
        mostrarResultado(edad);
    } else {
        // Si el formato no es correcto, mostrar un mensaje de error
        mostrarError("Error, el formato de fecha no es v�lido. Deben incluirse las barras inclinadas. Por ejemplo: 13/10/1988.");
    }
}

// Funci�n para obtener la edad a partir de la fecha de nacimiento
function obtenerEdad(fechaNacimientoString) {
    // Dividir la cadena de fecha en d�a, mes y a�o
    const [dia, mes, ano] = fechaNacimientoString.split('/');

    // Construir la fecha usando los componentes divididos
    const fechaNacimiento = new Date(`${ano}-${mes}-${dia}`);
    const fechaActual = new Date();

    // Verificar si la fecha es v�lida
    if (isNaN(fechaNacimiento.getTime())) {
        // Si la fecha no es v�lida, devolver null
        return null;
    }

    // Calcular la diferencia en milisegundos
    const diferenciaMilisegundos = fechaActual - fechaNacimiento;

    // Convertir la diferencia a a�os
    return Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24 * 365.25));
}

// Funci�n para mostrar el resultado en el HTML
function mostrarResultado(edad) {
    // Si la edad es v�lida, mostrar el resultado
    if (edad !== null) {
        document.getElementById('resultado').innerHTML = `Tiene ${edad} a�os.`;
        document.getElementById('mensajeError').textContent = '';
    } else {
        // Si la fecha no existe, mostrar un mensaje de error
        mostrarError("Error, revise la fecha introducida porque no existe.");
    }
}

// Funci�n para mostrar mensajes de error en el HTML
function mostrarError(mensaje) {
    document.getElementById('mensajeError').textContent = mensaje;
    document.getElementById('resultado').textContent = '';
}