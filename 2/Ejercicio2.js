do {
    // Solicitar dos n�meros al usuario
    var numero1 = parseFloat(prompt("Ingrese el primer n�mero:"));
    var numero2 = parseFloat(prompt("Ingrese el segundo n�mero:"));
    
    // Verificar si las entradas son n�meros v�lidos
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, ingrese �nicamente n�meros.");
        continue; 
        // Reiniciar el bucle si las entradas no son v�lidas. Por ejemplo, letras.
    }

    // Solicitar la operaci�n deseada
    var operacion = parseInt(prompt("Seleccione la operaci�n:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir"));

    // Variable para almacenar el resultado de la operaci�n
    var resultado;

    // Realizar la operaci�n seleccionada
    switch (operacion) {
        case 1:
            resultado = numero1 + numero2;
            break;
        case 2:
            resultado = numero1 - numero2;
            break;
            // No es necesario comprobar n�meros negativos, lo tiene en cuenta.
        case 3:
            resultado = numero1 * numero2;
            break;
        case 4:
            // Verificar si el segundo n�mero es cero antes de dividir
            resultado = (numero2 !== 0) ? numero1 / numero2 : "No se puede dividir por cero.";
            break;
        default:
            resultado = "Operaci�n no v�lida.";
    }

    // Mostrar el resultado al usuario
    alert("Resultado: " + resultado);

} while (prompt("�Quiere repetir la operaci�n? (S/N)").toUpperCase() === "S");