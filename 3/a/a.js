const fs = require('fs');

fs.open('newFile.txt', 'wx', function (err, fd) {
  if (err) {
    console.log('newFile.txt already Exist!');
    return;
  }
  console.log('newFile.txt created successfully !');
});
