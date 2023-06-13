// La forma correcta sin usar any
let desconocido: unknown;
desconocido = 'string';
desconocido = {};
desconocido = [];
desconocido = true;
desconocido = 51;

if (typeof desconocido === 'number') {
  desconocido.toString();
}
function get(data: string): unknown {
  return JSON.parse(data);
}

if (typeof desconocido === 'number') {
  let numeros: number = desconocido;
}
