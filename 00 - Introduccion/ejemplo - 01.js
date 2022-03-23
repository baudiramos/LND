
let edadInt = 0;

    let nombre = prompt("Por favor, introduzca su nombre: ");
        if (nombre === null || nombre === '') {
            window.alert("No ha introducido ningun nombre")
        }

    let edad = prompt("Ahora introduzca su edad");
        if (edad === null || edad === '') {
            window.alert("ERROR Valor erroneo")
        }

edadInt = parseInt(edad);

window.alert(`Hola, tienes ${edadInt} años y el año que viene tendrás ${edadInt + 1} años`)

