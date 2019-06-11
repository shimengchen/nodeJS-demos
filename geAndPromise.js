//Generator and promise
const fs = require('fs');
const co=require('co');

const readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function(error, data) {
      if (error) return reject(error);
      resolve(data);
    });
  });
};

const gen = function* () {
  const f1 = yield readFile('data1.txt');
  const f2 = yield readFile('data2.json');
  console.log(f1.toString());
  console.log(f2.toString());
};

const c=co(gen);
c.then(()=>console.log('end'));