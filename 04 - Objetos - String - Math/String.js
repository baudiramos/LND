/**
 *  Strings:
 * - Propiedades:
 *      length: Indica la longitud de la cadena (string)
 *      
 * - Metodos:
 *      TODOS los métodos devuelven una nueva cadena,
 *      la original no se modifica.
 * 
 *      .toUpperCase();
 *      .toLowerCase();
 *      .indexOf(string);
 *      .replace(valor a buscar, valor nuevo);
 *      .substring(inicio [,fin])           // cuando un valor tiene [,] significa que es opcional
 *      .slice(inicio [,fin]);
 *      .trim
 *      .startsWith(valor [,inicio])
 *      .endsWith(valor [,inicio])
 *      .split([separador])
 * 
 * 
 */

let cadena = "Hola Mundo";

/**********
 * LENGTH
 **********/

console.log(cadena.length);


/* ================================================ METODOS ===================================================

/**
 * .toUpperCase() -> Devuelve el valor con todo en mayúsculas
 */

 console.log(cadena.toUpperCase());  // Recordar poner los paréntesis, ya que de lo contrario sería una propiedad

/**
 * .toLowerCase() -> Devuelve el valor con todo en minusculas
 */

 console.log(cadena.toLowerCase());  // Recordar poner los paréntesis, ya que de lo contrario sería una propiedad

/**
 * .indexOf(string) -> Devuelve la posición en la que se encuentra el string, si no lo encuentra devuelve -1
 */

 console.log(cadena.indexOf('Mundo'));  

/**
 * .replace(valor a buscar, valor nuevo) -> Remplaza el fragmento de cadena que le digamos y pone el nuevo valor.
 */

 console.log(cadena.replace('Hola','Adios')); 
 console.log(cadena.replace('Mundo', 'Youtube'));

/**  
 * .substring(inicio [,fin]) -> Extrae los caractéres desde el inicio hasta el fin del valor que se haya introducido
 *                                (NO SE INCLUYE EL FINAL)
 * 
 *     Si no se le pasa el parámetro fin, extrae hasta el final de la cadena.
 *     El inicio si coje el valor en el que empieza.
 * 
 */ 

 console.log(cadena.substring(3)) // -> a Mundo

 console.log(cadena.substring(3,7)) // -> a Mu


/**
  * .slice(inicio [,fin]) -> Igual que ".substring" pero admite valores negativos, si ponemos valores negativos
  *     devolverá la cadena al revés. 
  * 
  *     Si no se incluye el final, extrae hasta el final
  * 
  *     (2, 4) -> Empieza a contar en el tercer carácter ([0 1 2]) y finaliza en -4
  *     (-2,-3) -> Empieza por longitudCadena - 2
  * 
  */

// Desde los 3 ultimos hasta el final

console.log(cadena.slice(-3));  // -> ndo

// Desde el inicio hasta los 6 ultimos

console.log(cadena.slice(0, -6)) // -> Hola (sin el espacio)

// Desde los 3 ultimos hasta el ultimo -1

console.log(cadena.slice(-3, -1)) // -> nd

/**
 * trim() -> Elimina los espacios al inicio y al final de la cadena
 *      NOTA: La tabluación cuenta como un grupo de espacios, por lo que funcionaría con este metodo
 */

let cadena2 = '                 Hola, ¿que tal?            ';

console.log(cadena2);
console.log(cadena2.trim());


/**
 * .starsWith(valor [,inicio]) -> Sirve para saber si la cadena comienza con "valor". Devuelve true o false
 */

console.log(cadena.startsWith('H'));            // -> True
console.log(cadena.startsWith('h'));            // -> False
console.log(cadena.startsWith('Hola'));         // -> True
console.log(cadena.startsWith('hola'));         // -> False

console.log(cadena.startsWith('M', 5));         // -> True - Porque empieza en la posición 5 

/**
 * .endsWith(valor [,inicio]) -> Sirve para saber si la cadena termina con "valor". Devuelve true o false
 */

console.log(cadena.endsWith('o'))               // -> True
console.log(cadena.endsWith('a', 4))            // -> True - Porque se refiere a "Hola" y esto termina en "a"
console.log(cadena.endsWith('Mundo'))           // -> True

 /**
  * .includes(valor [,inicio]) -> Igual que indexOf pero devuelve true o false. El "inicio" por defecto es 0
  */

console.log(cadena.includes('n'));              // -> True
console.log(cadena.includes('a', 5));           // -> False
console.log(cadena.includes('a', 2))            // -> True

 /**
  * .repeat(valor) -> Repite el string el número de veces que se le indique en valor
  */

 let cadena3 = 'Hola';
 console.log(cadena3.repeat(3)) // -> Devolvería: HolaHolaHola
 console.log('TextSinVariable'.repeat(10)) // -> Devolvería: TextSinVariableTextSinVariableTextSinVariable... así 10 veces

 /**
  * .split([speradaor]) -> Divide un string en un array de cadenas, mediante la separación de la cadena en
  *                            subcadenas.
  */

 const cadena4 = "Ene,Feb,Mar,Abr,May,Jun";


 console.log(cadena4.split(','));   // -> ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'];