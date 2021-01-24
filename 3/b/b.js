const fs = require('fs');

try {
  const res = fs.openSync('newFile.txt', 'wx');
  console.log('newFile.txt created successfully !');
} catch (e) {
  console.log('newFile.txt already Exist!');
}
