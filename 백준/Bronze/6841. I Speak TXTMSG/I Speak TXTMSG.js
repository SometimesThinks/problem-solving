const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const translations = {
  CU: 'see you',
  ':-)': 'I’m happy',
  ':-(': 'I’m unhappy',
  ';-)': 'wink',
  ':-P': 'stick out my tongue',
  '(~.~)': 'sleepy',
  TA: 'totally awesome',
  CCC: 'Canadian Computing Competition',
  CUZ: 'because',
  TY: 'thank-you',
  YW: 'you’re welcome',
  TTYL: 'talk to you later',
};

for (const short of input)
  console.log(translations[short] ? translations[short] : short);
