//Generator and co
var thunkify=require('thunkify');
var fs=require('fs');
var co=require('co');

var readFileWithThunk=thunkify(fs.readFile);

const gen=function*(){
    const r1=yield readFileWithThunk('data1.txt');
    console.log(r1.toString());
    // const fileName=r1.lo
    const r2=yield readFileWithThunk(r1.toString());
    console.log(r2.toString());
}
const c=co(gen);
c.then(data=>{
    console.log('结束');
});