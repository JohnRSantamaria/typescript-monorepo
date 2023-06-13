"use strict";
//manipulando funciones que son un bucle infinito
const buzzLightYear = () => {
    while (true) {
        console.log('Doing...');
    }
};
const error = (error) => {
    throw new Error(error);
};
const getExcusas = (excusas) => {
    if (typeof excusas === 'string') {
        return 'Deja la flojera';
    }
    else if (Array.isArray(excusas)) {
        return 'es una array';
    }
    return error('argumento');
};
console.log(getExcusas(1));
