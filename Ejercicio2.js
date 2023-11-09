//CALCULADORA

do {
    // Solicitar dos números al usuario
    var numero1 = parseFloat(prompt("Ingrese el primer número:"));
    var numero2 = parseFloat(prompt("Ingrese el segundo número:"));
    
    // Verificar si las entradas son números válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, ingrese únicamente números.");
        continue; 
        // Reiniciar el bucle si las entradas no son válidas. Por ejemplo, letras.
    }

    // Solicitar la operación deseada
    var operacion = parseInt(prompt("Seleccione la operación:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir"));

    // Variable para almacenar el resultado de la operación
    var resultado;

    // Realizar la operación seleccionada
    switch (operacion) {
        case 1:
            resultado = numero1 + numero2;
            break;
        case 2:
            resultado = numero1 - numero2;
            break;
            // No es necesario comprobar números negativos, lo tiene en cuenta.
        case 3:
            resultado = numero1 * numero2;
            break;
        case 4:
            // Verificar si el segundo número es cero antes de dividir
            resultado = (numero2 !== 0) ? numero1 / numero2 : "No se puede dividir por cero.";
            break;
        default:
            resultado = "Operación no válida.";
    }

    // Mostrar el resultado al usuario
    alert("Resultado: " + resultado);

} while (prompt("¿Quiere repetir la operación? (S/N)").toUpperCase() === "S");
