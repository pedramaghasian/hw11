const fs = require('fs');

fs.readFile('from.txt', 'utf8', function (err, data) {
  fs.readFile('append.txt', 'utf8', function (err, data2) {
    fs.appendFile('to.txt', `  ${data}`, function (err) {
      fs.appendFile('to.txt', `  ${data2}`, function (err) {});
    });
  });
});
