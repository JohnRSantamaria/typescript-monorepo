//tipos de arrays
(() => {
  let array: string[] = [];
  let array2: Array<string> = [];

  let numero: number[] = [];
  let numero2: Array<number> = [];

  let nombre = ['palabra', true];

  let mixto: (string | boolean | number)[] = ['palabra2', false];
  mixto.push(123213);
  // mixto.forEach((el) => console.log(el));
})();
// tipos de number
(() => {
  // number != Number => Estamos trabajando con el tipo de objeto Number
  let number: number = 123;
  number = number + 4;
  let edad: number;
})();
//tipos boolean
(() => {
  let boolean: boolean = true;
})();
//Tipos null || undef
(() => {
  let indef: undefined = undefined;
  let nulo: null = null;
  // let numbers: number = null ↓
  let number: number | null = null;
  let frase: string | undefined = undefined;

  function cafecito(tipo: string | null) {
    let cafe = '';
    if (tipo) {
      cafe = `${tipo}`;
    } else {
      cafe = 'ninguno';
    }

    // console.log(cafe);
  }

  function cafecito2(tipo: string | null) {
    let cafe = '';
    cafe = tipo || 'Ninguno..';
    // console.log(cafe);
  }

  cafecito2('Mocca');
  cafecito2(null);
})();
// Tipos union types
(() => {
  let user_id: string | number;
  user_id = 1;

  function session(user_id: string | number) {
    if (typeof user_id === 'string') {
      // do something
    }
  }
})();
// Tipos Any
(() => {
  let cualquiera: any;
  cualquiera = 'TS';

  cualquiera = 'lorem adasd asda sdasdasdads';
  (cualquiera as string).toUpperCase();

  //Genericos <>
  cualquiera = 1132123123123;
  // console.log(<number>cualquiera);
})();
// Tipos Alias
(() => {
  // por convencion se utiliza la primera en Capital
  type Nombre = string | number;
  function name(nombre: Nombre) {
    //se utiliza el tipo ↑ declarado
    return nombre;
  }

  type Year = number;
  type Marca = string;
  type Modelo = string;

  type Auto = {
    year_auto: Year;
    marca_auto: Marca;
    modelo_auto: Modelo;
  };

  const auto_year: Year = 1990;
  const auto_marca: Marca = 'Ford';
  const auto_modelo: Modelo = 'Festiva';

  const mi_primer_auto: Auto = {
    year_auto: auto_year,
    marca_auto: auto_marca,
    modelo_auto: auto_modelo,
  };

  // console.log(mi_primer_auto);
})();
// Tipos Literal Types => creamos el tipo que necesitamos
(() => {
  // let coordenadas: string
  type PuntosCardinales = 'N' | 'O' | 'S' | 'E';

  let coordenadas: PuntosCardinales;

  coordenadas = 'N';
  coordenadas = 'O';
  coordenadas = 'S';
  coordenadas = 'E';
  // coordenadas = "cosas..." => Error pues no hace parte de las declaradas

  function ubicar_tu_norte(norte: PuntosCardinales) {
    return norte;
  }

  // console.log(ubicar_tu_norte('E'));
})();
// Funciones TS
(() => {
  function sumar(a: number, b: number, c?: number) {
    //=> c: number = 0 tambien se puede de este modo
    return a + b + (c || 0);
  }
  sumar(2, 3);
})();
// Retorno de funciones
(() => {
  function calcularFecha(): number {
    return new Date().getTime();
  }

  function solicitarFecha(): void {
    calcularFecha();
  }

  solicitarFecha();
})();
// Retorno de funciones parametros nombrados
(() => {
  function division({
    dividendo,
    divisor,
  }: {
    dividendo: number;
    divisor: number;
  }): number {
    return dividendo / divisor;
  }

  division({ dividendo: 10, divisor: 2 });
})();
// Funciones || Objetos como parametros
(() => {
  type data = { correo: string; password: number; nombre: string };

  let usuarios: any = [];

  function registro(data: data) {
    usuarios.push(data);
  }
  registro({ correo: 'john@gmail.com', password: 1234, nombre: 'john' });
})();
// Funciones || Objetos como tipos
(() => {
  type data = { correo: string; password: number; nombre: string };

  let usuarios: data[] = [];

  function registro(data: data) {
    usuarios.push(data);
  }
  registro({ correo: 'john@gmail.com', password: 1234, nombre: 'john' });
})();
// Nullish Coalescing (??)
(() => {
  function auto(
    anho: number,
    marca: string,
    cantidad?: number,
    inStock?: boolean
  ) {
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

  function auto2(
    anho: number,
    marca: string,
    cantidad?: number,
    inStock?: boolean
  ) {
    return {
      anho,
      marca,
      cantidad: cantidad ?? 7,
      inStock: inStock ?? true,
    };
  }

  let test3 = auto2(1998, 'Ford', 0, true);
  let test4 = auto2(1998, 'Ford', 1, false);
})();

// rest params y slip operator
(() => {
  // REST
  function sumar(...valores: number[]) {
    let sumar = valores.reduce((item, valor) => (valor = item + valor), 0);
    return sumar;
  }
  // console.log(sumar(1, 2, 3, 4, 5));
  //Split opertor
  function sumar2(...valores: number[]) {
    let sumar = valores.reduce((item, valor) => (valor += item), 0);

    return 2;
  }
  let argumentos: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let resultado = sumar(...argumentos);
})();

// Tipos Enum
