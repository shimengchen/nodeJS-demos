//async
const fs = require('fs');

const readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function(error, data) {
      if (error) return reject(error);
      resolve(data);
    });
  });
};

const gen = async function() {
  const f1 = await readFile('data1.txt');
  const f2 = await readFile('data2.json');
  console.log(f1.toString());
  console.log(f2.toString());
};

gen();
gen().then(()=>console.log('end'));