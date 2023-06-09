// Inferencia de tipos
const avengers = ['Spidey', 'hulk', 'Thor'];

//hay inferencia pues sabe que avengers es una array de strings
avengers.forEach((avengers) => {
	console.log(avengers.toUpperCase());
});

//Type Alias

type HeroId = `${string}-${string}-${string}-${string}-${string}`;

type Hero = {
	id?: HeroId;
	name: string;
	age: number;
	isActive?: boolean;
};

// objetos
let hero: Hero = {
	name: 'thor',
	age: 2000,
};
//me dara los tipos que he creado dentro de la funcion

function createHero(hero: Hero): Hero {
	const { name, age } = hero;
	return { id: crypto.randomUUID(), name, age, isActive: true };
}

const thor = createHero({ name: 'thor', age: 1500 });

// Union types
type HeroPowerScale =
	| 'local'
	| 'planetary'
	| 'galactic'
	| 'universal'
	| 'multiversal';
const h: HeroPowerScale = 'planetary';

// Intersection types || Mixing types
type HeroInput = {
	name: string;
	age: number;
};

type HeroProperties = {
	readonly id?: HeroId;
	isActive?: boolean;
	powerScale?: HeroPowerScale;
};

type Hero1 = HeroInput & HeroProperties;

// Arrays
const languages = [];
//por la inferencia dice que siempre esta vacio

const languagesCorrect: (string | number)[] = []; // → para acepte cualquiea de los tipos que pongamos si o si debe ir en ()
const languagesCorrect2: Array<string> = [];

languagesCorrect.push('hola');

// Matrices
type CellValue = 'X' | 'O' | '';

type GameBoard = [
	[CellValue],
	[CellValue],
	[CellValue],
	[CellValue],
	[CellValue],
	[CellValue],
	[CellValue],
	[CellValue],
	[CellValue]
];

const gameBoard: GameBoard = [
	['X'],
	['O'],
	['X'],
	['X'],
	['O'],
	['O'],
	['X'],
	['X'],
	['O'],
];
