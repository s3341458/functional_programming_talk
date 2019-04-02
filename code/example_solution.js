const data = [
  {
    type: 'book',
    name: 'Python programming',
    length: 22,
    width: 10,
    height: 10
  },
  {
    type: 'book',
    name: 'Go programming',
    length: 22,
    width: 10,
    height: 10
  },
  {
    type: 'book',
    name: 'Haskell Programming',
    length: 22,
    width: 10,
    height: 10
  },
  {
    type: 'paper',
    name: 'white paper',
    length: 10,
    width: 10
  },
  {
    type: 'paper',
    name: 'yellow paper',
    length: 10,
    width: 10
  },
  {
    type: 'paper',
    name: 'blue paper',
    length: 10,
    width: 10
  }
];
// post fee of paper is square size * 100
// post fee of book is cubic size * 10
// total cost 9600

const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);

const cubicSize = (height) => (width) => (length) => height * width * length;
const squareSize = cubicSize(1);

const applyFunctionByKeys = (f) => (keys) => (obj) =>
  keys.reduce((gf, key) => gf(obj[key]), f);


const map = (f) => (a) => a.map(f);
const add = (x) => (y) => x + y;
const sum = (a) => a.reduce((x, y) => add(x)(y));


const bookSize = applyFunctionByKeys(cubicSize)(['height', 'width', 'length']);
const bookSizePrice = (size) => size * 10;
const bookPrice = compose(
  bookSizePrice,
  bookSize
);

const paperSize = applyFunctionByKeys(squareSize)(['width', 'length']);
const paperSizePrice = (size) => size * 100;
const paperPrice = compose(
  paperSizePrice,
  paperSize
);

const priceCalculateFunctions = {
  paper: paperPrice,
  book: bookPrice
};

const objPrice = (obj) => priceCalculateFunctions[obj.type](obj);

const objsToPrices = map(objPrice);
const postCost = compose(
  sum,
  objsToPrices
);

console.log(postCost(data));
