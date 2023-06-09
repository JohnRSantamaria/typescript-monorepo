interface RectanguloInterface {
  altura: number;
  ancho: number;
}

interface RectanguloconBorde extends RectanguloInterface {
  borde: string;
}

const miRectangulo: RectanguloconBorde = {
  altura: 30,
  ancho: 20,
  borde: 'Solid',
};

console.log(miRectangulo.borde);
