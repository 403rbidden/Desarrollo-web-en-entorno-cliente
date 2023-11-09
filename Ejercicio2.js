do {
    // Solicitar dos números al usuario
    var num1 = parseFloat(prompt("Ingrese el primer número:"));
    var num2 = parseFloat(prompt("Ingrese el segundo número:"));

    // Solicitar la operación deseada
    var operacion = parseInt(prompt("Seleccione la operación:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir"));

    // Variable para almacenar el resultado de la operación
    var resultado;

    // Realizar la operación seleccionada
    switch (operacion) {
        case 1:
            resultado = num1 + num2;
            break;
        case 2:
            resultado = num1 - num2;
            break;
        case 3:
            resultado = num1 * num2;
            break;
        case 4:
            // Verificar si el segundo número es cero antes de dividir
            resultado = (num2 !== 0) ? num1 / num2 : "No se puede dividir por cero.";
            break;
        default:
            resultado = "Operación no válida.";
    }

    // Mostrar el resultado al usuario
    alert("Resultado: " + resultado);

} while (prompt("¿Quiere repetir la operación? (S/N)").toUpperCase() === "S");
