"use strict";
//tipos de arrays
(() => {
    let array = [];
    let array2 = [];
    let numero = [];
    let numero2 = [];
    let nombre = ['palabra', true];
    let mixto = ['palabra2', false];
    mixto.push(123213);
    // mixto.forEach((el) => console.log(el));
})();
// tipos de number
(() => {
    // number != Number => Estamos trabajando con el tipo de objeto Number
    let number = 123;
    number = number + 4;
    let edad;
})();
//tipos boolean
(() => {
    let boolean = true;
})();
//Tipos null || undef
(() => {
    let indef = undefined;
    let nulo = null;
    // let numbers: number = null ↓
    let number = null;
    let frase = undefined;
    function cafecito(tipo) {
        let cafe = '';
        if (tipo) {
            cafe = `${tipo}`;
        }
        else {
            cafe = 'ninguno';
        }
        // console.log(cafe);
    }
    function cafecito2(tipo) {
        let cafe = '';
        cafe = tipo || 'Ninguno..';
        // console.log(cafe);
    }
    cafecito2('Mocca');
    cafecito2(null);
})();
// Tipos union types
(() => {
    let user_id;
    user_id = 1;
    function session(user_id) {
        if (typeof user_id === 'string') {
            // do something
        }
    }
})();
// Tipos Any
(() => {
    let cualquiera;
    cualquiera = 'TS';
    cualquiera = 'lorem adasd asda sdasdasdads';
    cualquiera.toUpperCase();
    //Genericos <>
    cualquiera = 1132123123123;
    // console.log(<number>cualquiera);
})();
// Tipos Alias
(() => {
    function name(nombre) {
        //se utiliza el tipo ↑ declarado
        return nombre;
    }
    const auto_year = 1990;
    const auto_marca = 'Ford';
    const auto_modelo = 'Festiva';
    const mi_primer_auto = {
        year_auto: auto_year,
        marca_auto: auto_marca,
        modelo_auto: auto_modelo,
    };
    // console.log(mi_primer_auto);
})();
// Tipos Literal Types => creamos el tipo que necesitamos
(() => {
    let coordenadas;
    coordenadas = 'N';
    coordenadas = 'O';
    coordenadas = 'S';
    coordenadas = 'E';
    // coordenadas = "cosas..." => Error pues no hace parte de las declaradas
    function ubicar_tu_norte(norte) {
        return norte;
    }
    // console.log(ubicar_tu_norte('E'));
})();
// Funciones TS
(() => {
    function sumar(a, b, c) {
        //=> c: number = 0 tambien se puede de este modo
        return a + b + (c || 0);
    }
    sumar(2, 3);
})();
// Retorno de funciones
(() => {
    function calcularFecha() {
        return new Date().getTime();
    }
    function solicitarFecha() {
        calcularFecha();
    }
    solicitarFecha();
})();
// Retorno de funciones parametros nombrados
(() => {
    function division({ dividendo, divisor, }) {
        return dividendo / divisor;
    }
    division({ dividendo: 10, divisor: 2 });
})();
// Funciones || Objetos como parametros
(() => {
    let usuarios = [];
    function registro(data) {
        usuarios.push(data);
    }
    registro({ correo: 'john@gmail.com', password: 1234, nombre: 'john' });
})();
// Funciones || Objetos como tipos
(() => {
    let usuarios = [];
    function registro(data) {
        usuarios.push(data);
    }
    registro({ correo: 'john@gmail.com', password: 1234, nombre: 'john' });
})();
// Nullish Coalescing (??)
(() => {
    function auto(anho, marca, cantidad, inStock) {
        return {
            anho,
            marca,
            cantidad: cantidad || 7,
            inStock: inStock || true,
        };
    }
    let test1 = auto(1998, 'Ford', 0, true);
    let test2 = auto(1998, 'Ford', 1, false);
    /*
    Problemas con ||
    0 === false
    "" === false
    false === false
    */
    /*
    ↳ La solucion a esto fue el ??
  
    */
    function auto2(anho, marca, cantidad, inStock) {
        return {
            anho,
            marca,
            cantidad: cantidad !== null && cantidad !== void 0 ? cantidad : 7,
            inStock: inStock !== null && inStock !== void 0 ? inStock : true,
        };
    }
    let test3 = auto2(1998, 'Ford', 0, true);
    let test4 = auto2(1998, 'Ford', 1, false);
})();
// rest params y slip operator
(() => {
    // REST
    function sumar(...valores) {
        let sumar = valores.reduce((item, valor) => (valor = item + valor), 0);
        return sumar;
    }
    // console.log(sumar(1, 2, 3, 4, 5));
    //Split opertor
    function sumar2(...valores) {
        let sumar = valores.reduce((item, valor) => (valor += item), 0);
        return 2;
    }
    let argumentos = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let resultado = sumar(...argumentos);
})();
// Tipos Enum
