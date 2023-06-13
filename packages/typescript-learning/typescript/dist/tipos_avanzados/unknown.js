"use strict";
// La forma correcta sin usar any
let desconocido;
desconocido = 'string';
desconocido = {};
desconocido = [];
desconocido = true;
desconocido = 51;
if (typeof desconocido === 'number') {
    desconocido.toString();
}
function get(data) {
    return JSON.parse(data);
}
if (typeof desconocido === 'number') {
    let numeros = desconocido;
}
