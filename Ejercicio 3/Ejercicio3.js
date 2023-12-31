// Solicitar DNI al usuario
const DNIUsuario = prompt("Ingrese su DNI (con letra mayuscula y sin espacios ni guiones):");
// Las comillas dobles no permiten la interpolaci�n de variables directamente 
// Para concatenar variables se necesita utilizar el operador +

// Funci�n para obtener la letra correspondiente a partir del n�mero
function obtenerLetra(numero) {
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    // Las comillas simples no permiten la interpolaci�n de variables ni expresiones
    // Interpreta literalmente
    const resto = numero % 23;
    return letras.charAt(resto);
}

// Funci�n para validar eL DNI
function validarDNI(DNI) {
    // Expresi�n regular para validar el formato
    const formatoValido = /^\d{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/;

    if (!formatoValido.test(DNI)) {
        return false;
        // El formato no es v�lido
    }

    // Extraer los d�gitos y la letra
    const digitos = DNI.substring(0, 8);
    const letraIntroducidaPorElUsuario = DNI.charAt(8).toUpperCase();

    // Convertir los d�gitos a un n�mero
    const numero = parseInt(digitos, 10);

    // Obtener la letra correspondiente al n�mero
    const letraCalculada = obtenerLetra(numero);

    // Validar si la letra proporcionada es la correcta
    return letraIntroducidaPorElUsuario === letraCalculada;
}

// Validar el DNI ingresado
const esValido = validarDNI(DNIUsuario);

// Mostrar el resultado
/* if (esValido) {
 alert(`El DNI ${DNIUsuario} es valido.`);
 } else {
 alert(`El DNI ${DNIUsuario} no es valido.`);
 } */

const mensaje = esValido ? `El DNI ${DNIUsuario} es valido.` : `El DNI ${DNIUsuario} no es valido.`;
alert(mensaje);
// Las comillas invertidas permiten la interpolaci�n de variables o expresiones mediante ${}