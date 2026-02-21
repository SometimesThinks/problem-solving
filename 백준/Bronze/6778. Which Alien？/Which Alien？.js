const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const antenna = input[0];
const eyes = input[1];

if (antenna >= 3 && eyes <= 4) console.log('TroyMartian');
if (antenna <= 6 && eyes >= 2) console.log('VladSaturnian');
if (antenna <= 2 && eyes <= 3) console.log('GraemeMercurian');
