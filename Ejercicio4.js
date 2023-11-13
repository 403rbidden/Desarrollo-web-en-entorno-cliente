//FECHA ACTUAL FORMATEADA

// Obtener la fecha actual
const fechaActual = new Date();

// Obtener día
const dia = fechaActual.getDate().toString().padStart(2, '0');
// Obtener mes
const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); 
    // Se suma 1 porque los meses van de 0 a 11
// Obtener año
const anio = fechaActual.getFullYear();

// Obtener la hora
const horas = fechaActual.getHours().toString().padStart(2, '0');
// Obtener minutos
const minutos = fechaActual.getMinutes().toString().padStart(2, '0');
// Obtener segundos
const segundos = fechaActual.getSeconds().toString().padStart(2, '0');

// Construir los mensajes con el formato requerido
    // dd/MM/YYYY
const mensajeFecha = `Fecha actual: ${dia}/${mes}/${anio}`;
    // hh:mm:ss
const mensajeHora = `Hora actual: ${horas}:${minutos}:${segundos}`;

// Mostrar los mensajes
console.log(mensajeFecha);
console.log(mensajeHora);
