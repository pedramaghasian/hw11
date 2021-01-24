const fs = require('fs');

fs.readFile('from.txt', 'utf8', function (err, data) {
  if (err) return console.log(err.message);
  fs.writeFile('to.txt', data, function (err) {
    if (err) return console.log(err.message);
    console.log('write to.txt successfully !');
  });
});
