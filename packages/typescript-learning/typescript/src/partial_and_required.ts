export interface tecnologias {
  javaScript?: string;
  webhook?: string;
  dto?: string; // → Sabe de que es eso ?
  token: string;
  sql: string;
  ruby: string;
}

// convierte todas las propiedades en opcionales
export interface lenguajes_de_programacion extends Partial<tecnologias> {}
export const lenguajes: lenguajes_de_programacion = {
  javaScript: 'Front',
  ruby: 'Back',
  sql: 'Back',
};

console.log(lenguajes);

// Convierte todas la propiedades en obligatorias
export interface lenguajes extends Required<tecnologias> {}
