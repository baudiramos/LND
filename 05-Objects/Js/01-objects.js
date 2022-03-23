/*
    * Un objeto es una colección de propiedades 
    * Una propiedad es una asociación entre un nombre
    * (o clave y un valor)
* 
 */


const person = {
    name: "Luis",
    age: 26,
    sons: ["Laura", "Diego"]
};

console.log(person.name);

// for in

// Itera sobre la propiedades de un objeto


// Obtener los valores

for (const key in person) {
    console.log(person[key]);
}

// Formato Firebase

const usuarios = {
    "Jorge Luis": {
        isFav: true
    },
    "Google.com": {
        isFav: false
    },
    "lacuesta.salesianos.edu": {
        isFav: true
    }
}

for (const key in usuarios) {
    if ( usuarios[key].isFav ) {
        console.log("Favoritos: ", key);
    }
    // console.log(usuarios[key]);
}

// Mostrar todos los aprobados con sus nombres en MAYÚSCULAS

let alumnos = [

    {nombre: "laura", calificacion: 8},
    {nombre: "Jorge", calificacion: 5},
    {nombre: "Daniel", calificacion: 9},
    {nombre: "Diana", calificacion: 8},
    {nombre: "Viana", calificacion: 3},
    {nombre: "Rodrigo", calificacion: 4},
    {nombre: "Lourdes", calificacion: 7},

]

const aprobados = alumnos
    .filter( (alumnos) => alumnos.calificacion > 4 )
    .map( (a) => a.nombre.toUpperCase());

console.log(aprobados);

