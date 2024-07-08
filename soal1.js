const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukkan sebuah bilangan genap: ', (input) => {
    let x = parseInt(input);
    
    if (x < 0) {
        console.log("Tidak bisa input bilangan negatif");
    } else if (x % 2 !== 0) {
        console.log("Tidak bisa input bilangan ganjil");
    } else {
        console.log("Akar pangkat 2 dari " + x + " adalah " + Math.sqrt(x));
    }

    rl.close();
});
