
window.alert("Leyenda: Insuficiente(0-4), Suficiente(5), Bien(6), Notable(7-8), Sobresaliente(9-10)")

let valorUsuario = prompt("Introduzca por favor una nota: ", "0") 

if (valorUsuario == '' || valorUsuario == null) {
    valorUsuario == "0";
}

valorUsuario = parseInt(valorUsuario);

switch (valorUsuario) {
    case 1:
    case 2:
    case 3:
    case 4:
        window.alert(`La nota introducida (${valorUsuario}) es un Insuficiente`)
        break;
    case 5:
        window.alert(`La nota introducida (${valorUsuario}) es un Suficiente`)
        break;
    case 6:
        window.alert(`La nota introducida (${valorUsuario}) es un Bien`)
        break;
    case 7:
    case 8:
        window.alert(`La nota introducida (${valorUsuario}) es un Notable`)
        break;
    case 9:
    case 10:
        window.alert(`La nota introducida (${valorUsuario}) es un Sobresaliente`)
        break;
    default:
        window.alert(`El número introducido no está en el rango`)

}