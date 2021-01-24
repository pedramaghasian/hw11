const fs = require('fs');

const data = fs.readFileSync('from.txt', 'utf8');
fs.writeFileSync('to.txt', data);
