const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const limit = Number(input[0]);
const speed = Number(input[1]);
const diff = speed - limit;

if (diff <= 0) console.log('Congratulations, you are within the speed limit!');
else if (diff <= 20) console.log('You are speeding and your fine is $100.');
else if (diff <= 30) console.log('You are speeding and your fine is $270.');
else console.log('You are speeding and your fine is $500.');
