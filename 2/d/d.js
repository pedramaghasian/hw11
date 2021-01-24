const fs = require('fs');

const data = fs.readFileSync('from.txt', 'utf8');
const data2 = fs.readFileSync('append.txt', 'utf8');
fs.appendFileSync('to.txt', `  ${data}`);
fs.appendFileSync('to.txt', `  ${data2}`);
