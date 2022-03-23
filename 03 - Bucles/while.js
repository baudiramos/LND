// While del 0 al 9

console.log("================ WHILE DEL 0 AL 9 (INCLUSIVE) ================ \n");

let index = 0;

while (index < 10) {
    console.log(index)
    index++;
}

console.log("================ WHILE DEL 9 AL 0 (INCLUSIVE) ================ \n")

index = 9;

while (index > -1) {
    console.log(index)
    index--;
}

console.log("================ WHILE DEL 9 AL 0 (INCLUSIVE) - IMPARES ================ \n")


index = 10;

while (index > -1) {
    if (index % 3 == 0) {
        console.log(index)
    }
    index--;
}

/*

console.log("================ DESDE - HASTA CON PROMPT (Pidiendo un valor al usuario) ================ \n")


let valorInferior = window.prompt('Dime por favor un valor');
let valorMaximo = window.prompt('Ahora dime un valor mas alto');

valorInferior = parseInt(valorInferior);
valorMaximo = parseInt(valorMaximo);

while (valorInferior < valorMaximo) {
    console.log(valorInferior);
    valorInferior++;
}

*/

console.log("================ TABLA DE MULTIPLICAR ================ \n")

let valorUsuario = window.prompt('Dime de que número quieres la tabla de multiplicar: ')

index = 0;
valorUsuario = parseInt(valorUsuario);

while (index <= 10) {
    console.log(`${valorUsuario} x ${index} = ${index * valorUsuario}`);
    index++;
}


