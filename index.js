//FOR O WHILE
// Crea un array vacío llamado `stack`
// Crea un array `numbers` con los números del 1 al 5 in orden ascendente

const stack = [];
const numbers = [1, 2, 3, 4, 5];

// La función multiplyByTwo tiene que devolver un array con los números multiplicados por 2 de cada elemento del array `numbers`
function multiplyByTwo() {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2);
  }
  return result;
}
/* console.log(multiplyByTwo()) */

// La función evenNumbers tiene que devolver los números pares del array `numbers`
function evenNumbers() {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result.push(numbers[i]);
    }
  }
  return result;
}
/* console.log(evenNumbers()) */

// La función numbersBackwards tiene que devolver los números del array `numbers` en orden inverso
function numbersBackwards() {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i]);
  }
  return result.reverse();
}
/* console.log(numbersBackwards()) */

// La función `sum` tiene que devolver la suma de todos los números del array `numbers`
function sum() {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}
/* console.log(sum()) */

// La función `average` tiene que devolver el promedio de todos los números del array `numbers`
function average() {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i] / numbers.length;
  }
  return result;
}
/* console.log(average()) */

// La función `biggestPrime` tiene que devolver el número primo más grande de los primeros 100 números
// El parámetro numbers es el número 100
//La función isPrime compueba si un número es primo. Math.sqrt() devuelve la raíz cuadrada (se utiliza para verificar los divisores menores a su raiz cuadrada).
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; //no es primo ya que se divide por si mismo, 1 y otro numero.
    }
  }
  return true;
}

function biggestPrime() {
  let largestPrime = -1;
  for (let i = 2; i <= 100; i++) {
    if (isPrime(i)) {
      largestPrime = i;
    }
  }
  return largestPrime;
}
/* console.log(biggestPrime()); */

// Crea una variable person y asígnale un objeto vacío

// Agrega una propiedad `name` al objeto y asígnale "Jorge" como valor

// Agrega una propiedad `lastName` al objeto y asígnale "Gonzalez" como valor

// Agrega una propiedad `birthYear` al objeto y asígnale 1995 como valor

// Agrega una función `getFullName` al objeto que devuelva el nombre completo

// Agrega una función `getBirthYear` al objeto que devuelva la edad (asumiendo que es el año 2023)

const person = {
  name: "Jorge",
  lastName: "Gonzalez",
  birthYear: 1995,
};
function getFullName() {
  return person.name + " " + person.lastName;
}
/* console.log(getFullName()) */

function getBirthYear() {
  return 2023 - person.birthYear;
} /* 
console.log(getBirthYear()) */
