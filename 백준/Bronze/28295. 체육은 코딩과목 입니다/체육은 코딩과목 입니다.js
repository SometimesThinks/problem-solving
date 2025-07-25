const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const commands = input.map(Number);
let dir = 'N';

for (const com of commands) {
  if (com === 1) {
    switch (dir) {
      case 'N':
        dir = 'E';
        break;
      case 'E':
        dir = 'S';
        break;
      case 'S':
        dir = 'W';
        break;
      case 'W':
        dir = 'N';
        break;
    }
  } else if (com === 2) {
    switch (dir) {
      case 'N':
        dir = 'S';
        break;
      case 'E':
        dir = 'W';
        break;
      case 'S':
        dir = 'N';
        break;
      case 'W':
        dir = 'E';
        break;
    }
  } else {
    switch (dir) {
      case 'N':
        dir = 'W';
        break;
      case 'E':
        dir = 'N';
        break;
      case 'S':
        dir = 'E';
        break;
      case 'W':
        dir = 'S';
        break;
    }
  }
}
console.log(dir);
