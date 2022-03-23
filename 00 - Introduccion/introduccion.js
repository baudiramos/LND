
console.log("Hello from JavaScript!!");         // Escribir este texto en la consola

// Declaración de variables

let miPrimeraVariable = 3;          // Valor Entero
let miSegundaVariable = true;       // Valor Booleano
let miTerceraVariable = "Hola";      // Valor String
let miCuartaVariable = 14.59;       // Valor Flotante

// No es necesario especificar el tipo de valor

// Para mostrar estos valores usaremos console

console.log("Valor numerico: ", miPrimeraVariable);

console.log("Valor Booleano: ", miSegundaVariable);

console.log("Valor String: ", miTerceraVariable);

console.log("Valor Flotante: ", miCuartaVariable);

miPrimeraVariable = "tres";
miSegundaVariable = 0;
miTerceraVariable = 0.0123;

console.log("El valor numerico ha cambiado, ahora es: " + miPrimeraVariable);
console.log(miSegundaVariable);
console.log(miTerceraVariable);

// ----------------------------- TIPOS DE DATOS ----------------------------- //

console.log("TIPOS DE DATOS"); 
console.log(" ")

// Numerico

let n1 = 1;
let n2 = 0.05;

// Booleanos

let b = true;   // true o false (internamente es un 0 o 1)

// Cadenas (Strings)

let s1 = 'Esto es una cadena';
let s2 = "Esto es tambien una 'cadena'";
let s3 = `s2 tiene "s1 tiene 'un string'"`;     // Este tipo permite mezclar variables y numeros 
                                                    // se denomina backticks

console.log(s1);
console.log(s2);
console.log(s3);

// Array

let lista1 = [];
let lista2 = [1, 2, 3];
let lista3 = [1, true, "abcde"];

// Objet

let o1 = {};
let o2 = {
    name: 'Antonio',
    edad: 27,
    sexo: 'masculino'
};

// Null 

let z = null;

// Undefined 

let d;

console.log(z);
console.log(d);

// Valores constantes

const a = 5;    // Valor constante e irremplazable a lo largo del codigo

// a = 3;      Si descomentamos esto daria un error

console.log(a);

// NO se pueden declarar "const" sin asignarle un valor

// const b; Esto descomentado daría un error

console.log(" ");


// ----------------------------- BACKTICKS y BACKQUOTES ----------------------------- //

console.log("BACKTICKS y BACKQUOTES");
console.log(" ");


// Los backquotes (o backticks) nos permiten insertar 
// expresiones en un String

let numero3 = 3;

console.log(`a es igual a: ${numero3}`);
console.log(`a es igual a: ${numero3 + 1}`);

// También se permiten los saltos de línea 

let lang = "JavaScript";
let html = `
    <html>
        <body>
            <p>Algo de HTML dentro de ${lang}</p>
        </body>
    </html>
`

console.log(html);
console.log(" ");

// ----------------------------- OPERADORES ARITMETICOS ----------------------------- //

console.log("OPERADORES ARITMETICOS");
console.log(" ");

/*
 *  Operadores:
 *  
 *  +   Suma
 *  -   Resta
 *  *   Multiplicaciones
 *  /   Divisiones
 *  %   Módulo (Resto)
 *  **  Potencia (Elevación)
 *  ++  Incrimentar en 1
 *  --  Decrementar en 1
 *    
 */

let num_1 = 20  ;
let num_2 = 10;

let num_3 = num_1 + num_2;  // 30
let num_4 = num_1 / num_2;  // 2
let num_5 = num_1 % num_2;  // 0

num_5++;            // num_5 = num_5 + 1 --> 1

/*
 *  
 *   Prioridad de operadores aritméticos
 *       De mayor a menor prioridad:
 *             *, /, %, +, -
 * 
 */

let num_6 = num_3 + num_5 * num_4;          // 32
let num_7 = (num_3 + num_5) * num_4;        // 62

console.log(num_3);
console.log(num_4);
console.log(num_5);
console.log(num_6);
console.log(num_7);

console.log(" ");

// ----------------------------- OPERADORES RELACIONALES ----------------------------- //

console.log("OPERADORES RELACIONALES");
console.log(" ");


/*
 *  Operadores:
 *  
 *          <   Mayor
 *         >   Menor
 *        >=   Mayor o igual que
 *       <=  Menor o igual que
 *      ==   Igual
 *     ===  Estrictamente igual (En valor y en tipo)
 * 
 *          let a = 10;
 *          let b = 10.00;
 * 
 *          console.log(a = b);  ----> true
 *          console.log(a == b); ----> false
 *
 *       Ambos son el "mismo numero" pero uno es decimal y el otro entero
 *  
 *    !=  Distinto
 *    
 */

num_1 = 20;
num_2 = 10;

num_3 = "20";

console.log(num_1 < num_2); // false
console.log(num_1 == num_2); // false
console.log(num_1 != num_2); // true

console.log(num_1 == num_3); // false
console.log(num_1 === num_3); // true

console.log(" ");

// ----------------------------- OPERADORES LÓGICOS ----------------------------- //

console.log("OPERADORES LÓGICOS");
console.log(" ");

/*
 *  Operadores:
 *      
 *      && AND (y)
 *      || OR (o)
 *      ! NOT (negación)
 *      
 */

num_1 = 19;
num_2 = 19;

console.log(num_1 == num_2 && num_1 > num_2);   // false
console.log(num_1 == num_2 && num_1 == 19);     // true
console.log(num_1 == num_2 || num_1 > num_2);   // true
console.log(num_1 < num_2 || num_1 > num_2);    // false
console.log(!(num_1 == num_2));                 // false



// ----------------------- MOSTRAR MENSAJE DE ALERTA AL USUARIO ----------------------------- //

window.alert("Esto es una alerta");      // Saldrá una ventana cada vez que se recarge la pagina


// -------------------------- SOLICITAR INFORMACIÓN AL USUARIO ------------------------------- //

let nombre = prompt("Indica tu nombre");

if (nombre === null || nombre === '') {
    window.alert("No ha introducido ningún nombre")
} else {
    window.alert(`Ha introducido el nombre: ${nombre}`);
}