

/*
*
* concat(valor, valorN) --> Uno dos o más arrays sin modificarlos
*                           y devuelve un nuevo array
*
*
 */

let aNumeros = [2,3,4];
console.log(aNumeros); // -> [2, 3, 4]

aNumeros = aNumeros.concat(5,6);
aNumeros = aNumeros.concat([6, 7, 8]);
aNumeros = aNumeros.concat([9 ,10], 11, [12,13]);
console.log(aNumeros);


/**
    * Spread Operator
    * Sintaxis: ...  
 */

const numbers = [-12, 2, 3, 13, 43, 2, 3];

console.log(numbers); // -> Vemos el array con sus elementos
console.log(...numbers); // -> Vemos cada valor separado

/**
 * Usos del Spreat Separator
 *
 */


/**
 * Enviar elemeentos de un array a una función
 */

const addNumber = (a, b, c) => {
    console.log(a + b + c);
}

addNumber(1, 2, 3);

const numbersToAdd = [1, 2, 3];
addNumber(numbersToAdd); // -> Error
// addNumber(numbersToAdd[0], numbersToAdd[1], numbersToAdd[2]);
addNumber(...numbersToAdd); // -> Ok

/**
 * Añadir un array a otro array
 */

let users = ["jose", "Alberto", "Jorge", "Alvaro"];
let newUser= ["Maxi", "Sergio", "Juan"];

/*
Esto seria una forma
 */

users.push(newUser[0], newUser[1], newUser[2]);
console.log(users);

// Otra forma: Recorrer con un bucle newUser y hacer push a users

// La mejor forma
users.push(...newUser);
console.log(users);

// Copiar arrays
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [arr1];
console.log(arr2);

// Otra forma que valdria siempre y cuando comenzamos el nombre
// array (arr3), en muchos casos no se puede hacer
let arr3 = arr1;
console.log(arr3);

// Otra forma 
let arr4 = [...arr1];
console.log(arr4);

/*
* Concatenar arrays
*
 */

let arr5 = [2, 3, 4];
let arr6 = [5, 6, 7, 8]

const arrConcact = [...arr5, ...arr6];
console.log(arrConcact);

/**
 * Libreria Math
 */

const aNumbers = [-12, 2, 3, 13, 43, 2, 3];
console.log(Math.max(aNumbers)); // => No funciona
console.log(Math.max(...aNumbers)); // => 43