const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');
// n: 질의 수, m: 테이블 수
const [n, m] = input[0].split(' ').map(Number);
let postit = [];

for (let i = 1; i < n + 1; i++) {
  const command = input[i].split(' ');

  if (command[0] === 'order') {
    const table = Number(command[1]);
    const time = Number(command[2]);

    postit.push([table, time]);
    console.log(...[...postit].map((e) => e[0]));
  } else if (command[0] === 'complete') {
    const table = Number(command[1]);

    postit = postit.filter((e) => e[0] !== table);
    if (postit.length !== 0) {
      console.log(...[...postit].map((e) => e[0]));
    } else {
      console.log('sleep');
    }
  } else if (command[0] === 'sort') {
    postit.sort((e1, e2) => {
      return e1[1] === e2[1] ? e1[0] - e2[0] : e1[1] - e2[1];
    });

    if (postit.length !== 0) {
      console.log(...[...postit].map((e) => e[0]));
    } else {
      console.log('sleep');
    }
  }
}
