// In functional programming it is all about build functions
// efficiently generate functions from functions

const person = {
  name: 'Tom',
  income: '10000'
};

// use function as output of a function
function getByKey(key) {
  return function (p) {
    return p[key];
  };
}
const getPersonName = getByKey('name');
console.log(`person name: ${getPersonName(person)}`);
// person name: Tom

// currying is an efficient way to generate a function by take one parameter
// each time and generate a partial functional which needs the following
// parameters
const getByKeyCurrying = (key) => (p) => p[key];
// getByKeyCurrying = (key) => ((p) => p[key]);
// same to getByKey

const getPersonIncome = getByKeyCurrying('income');
console.log(`person income: ${getPersonIncome(person)}`);
// person income: 10000

// 1. compose function, since each function is pure, so we can image chain function
// build functions by use the output of each function as the input of the following
// function

const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);

const uppercase = (string) => string.toUpperCase();

const personNameUpperCase = compose(uppercase, getPersonName);

console.log(`person name uppercase: ${personNameUpperCase(person)}`);
// TOM

// high order function
// a function need to take one or more functions as is parameters
// sort, map, reduce, filter is classic sort function
const array = [1, 2, 3, 4, 5];
const map = (a, f) => a.map(f);

const add = (n) => (x) => n + x;

const arrayPlusOne = (a) => map(a, add(1));
// const arrayPlusOne = (a) => map(a, x => x + 1);
console.log(`arrayPlusOne:${arrayPlusOne(array)}`);
// [2, 3, 4, 5, 6]

const arrayAddByLength = (a) => map(a, add(a.length));
console.log(`arrayAddByLength:${arrayAddByLength(array)}`);
// [6,7,8,9,10]

const sum = (a) => a.reduce((x, y) => add(x)(y));
console.log(`sum:${sum(array)}`);
// 15

const arrayAddBySum = (a) => map(a, add(sum(a)));
console.log(`arrayAddBySum:${arrayAddBySum(array)}`);
// [16, 17, 18, 19, 20]

// interesting combination usage
const filp = (f) => (x, y) => f(y, x);

const isBigger = (x, y) => x > y;
console.log('3 is bigger than 4:', isBigger(3, 4));
// false

const isSmaller = filp(isBigger);
console.log('3 is smaller than 4:', isSmaller(3, 4));
// true
