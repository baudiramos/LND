// ------ CONDICIONAL SWITCH ------ //

let numA = window.prompt("Introduce el 1º número", "0");
let numB = window.prompt("Introduce el 2º número", "0");
let op = window.prompt("Introduce el operador : +,-,* ó /", "+");

if (numA == null || numA == "") {
    numA = 0;    
}
if (numB == null || numB == "") {
    numB = 0;
}
if (op == null || op == "") {
    op = "+";
} 


numA = parseInt(numA);
numB = parseInt(numB);

switch (op) {
    case '+':
        console.log(`El resultado es: ${numA + numB}`)
        break;
    case '-':
        console.log(`El resultado es ${numA - numB}`)
        break;
    case '*':
        console.log(`El resultado es ${numA * numB}`)
        break;
    case '/':
        console.log(`El resultado es ${numA / numB}`)
        break;
    default:
        console.log(`No conozco la operación matemática: '${op}'`)
}