const getfNameAndLname = (fname, lname, cb) => {
  const fullName = `${fname} ${lname}`;
  cb(fullName);
};

getfNameAndLname('pedram', 'Aghasian', (fullName) => {
  console.log(fullName);
});
