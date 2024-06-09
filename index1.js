// provar expreciones mas sencillas


// let arreglo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 1; i <= 10; i++) {

// 

/*let sumar = 0;
let x = 1;

while (x <= 100) {
    sumar = sumar + x;
    x = x + 1;
}

console.log(`La suma del 1 al 100 es: ${sumar}`);*/


let user = Math.floor(Math.random() * 3);
let computer = Math.floor(Math.random() * 3);

if (user == 0 && computer == 2) {
    console.log(`user = ${user} y computer = ${computer}: Ganas`);
}

else if (user == 1 && computer == 0) {
    console.log(`user = ${user} y computer = ${computer}: Ganas`);
}

else if (user == 2 && computer == 1) {
    console.log(`user = ${user} y computer = ${computer}: Ganas`)
}

else if (user == computer) {
    console.log(`user = ${user} y computer = ${computer}: Empate`);
}

else {
    console.log(`user = ${user} y computer = ${computer}: Pierdes`);
}





