

/*
*
*
 */

const activities = [
    ["Work", 9],
    ["Eat", 1],
    ["Play", 1]
];

console.table(activities);

activities.push(["Study", 2]);

console.log(activities[1][1]);

// Añadie un nuevo elemento a un array existente

activities[1].push("djskf");
console.table(activities);