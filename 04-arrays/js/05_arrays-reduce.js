/*
 *  Ejecuta una función reductora sobre cada elemento de un array
 *  devolviendo como resultado un único valor
 *
 *
 *  .reduce(callback(acumulador, valoractual, [index [,array[]], valorInicial, )
 *  acumulador = Acumula el valor devuelto por la funcion callback
 *  valorActual = El elemento que está siendo procesado
 *
 *  index = opcional, indice del elemento actual que se está procesando
 *  array = opcional, array sobre el que se ha llamado a la funcion reduce
 *  valorInicial = opcional, usado como promer argumento en la primera llamada
 *
 *            de la función callback
 *
 *
 *
 * */

/*

array.reduce(( acu, value, index, arr ) => {

}, valorInicial);

 */



// Realiza la suma de los elementos


const array = [1, 2, 3, 4];

const reducer1 = array.reduce( (acumulator, currentValue) => {
    return acumulator + currentValue;
});

console.log(reducer1); // -> 10

const reducer2 =  (acumulator, currentValue) => acumulator + currentValue;


console.log(array.reduce(reducer2)); // -> 10

// Inicializa en el 15


console.log(array.reduce(reducer2, 5)); // -> 15