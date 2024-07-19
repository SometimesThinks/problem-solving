const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let n = null

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    n = Number(input[0])

    for (let i = 1; i < n + 1; i++) {
        console.log('*'.repeat(i))
    }
});


