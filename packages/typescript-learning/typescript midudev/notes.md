# Typescript

### JavaScript es detipado devil y dinamico

- Dinamico : podemos cambiar los tipos de una variable
- Devil: no debemos declarar el tipo

### TypeScript es de tipado fuerte y statico

Typescript no funciona en tiempo de ejecucion

Extencion pretty TypsCript Erros

Evitar intentar escribir tipos todo lo que TS pueda hacer dejar que lo haga

Any: Que ignore el tipo
unknown: No se cual es el tipo

<br/>

---

### Typando las funciones

```TypeScript
const sumar = (a: number, b: number): number => {
	return a + b;
};

const restar: (a: number, b: number) => number = (a, b) => {
	return a - b;
};
//  Never (nunca regresara nada)
function throwError(message: string): never {
	throw new Error(message);
}
/*
never: Nunca va a terminar de ejecutar la funcion
void: termina la funcion pero no regresa nada
*/

```
