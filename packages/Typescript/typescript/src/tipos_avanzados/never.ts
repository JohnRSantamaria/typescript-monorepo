//manipulando funciones que son un bucle infinito
const buzzLightYear = (): never => {
  while (true) {
    console.log('Doing...');
  }
};
const error = (error: string) => {
  throw new Error(error);
};
const getExcusas = (excusas: unknown) => {
  if (typeof excusas === 'string') {
    return 'Deja la flojera';
  } else if (Array.isArray(excusas)) {
    return 'es una array';
  }

  return error('argumento');
};

console.log(getExcusas(1));
