// Solicitar DNI al usuario
const DNIUsuario = prompt("Ingresa tu DNI (con letra mayuscula y sin espacios ni guiones):");
// Las comillas dobles no permiten la interpolación de variables directamente 
// Para concatenar variables se necesita utilizar el operador +

// Función para obtener la letra correspondiente a partir del número
function obtenerLetra(numero) {
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    // Las comillas simples no permiten la interpolación de variables ni expresiones
    // Interpreta literalmente
    const resto = numero % 23;
    return letras.charAt(resto);
}

// Función para validar eL DNI
function validarDNI(DNI) {
    // Expresión regular para validar el formato
    const formatoValido = /^\d{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/;

    if (!formatoValido.test(DNI)) {
        return false;
        // El formato no es válido
    }

    // Extraer los dígitos y la letra
    const digitos = DNI.substring(0, 8);
    const letraProvida = DNI.charAt(8).toUpperCase();

    // Convertir los dígitos a un número
    const numero = parseInt(digitos, 10);

    // Obtener la letra correspondiente al número
    const letraCalculada = obtenerLetra(numero);

    // Validar si la letra proporcionada es la correcta
    return letraProvida === letraCalculada;
}

// Validar el DNI ingresado
const esValido = validarDNI(DNIUsuario);

// Mostrar el resultado
/* if (esValido) {
 alert(`El DNI ${DNIUsuario} es valido.`);
 } else {
 alert(`El DNI ${DNIUsuario} no es valido.`);
 } */

const mensaje = esValido ? `El DNI ${DNIUsuario} es válido.` : `El DNI ${DNIUsuario} no es válido.`;
alert(mensaje);
// Las comillas invertidas permiten la interpolación de variables o expresiones mediante ${}
