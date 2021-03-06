//Generator Demo
var fetch=require('node-fetch');

function* gen(){
    var url='https://api.github.com/users/github';
    var result=yield fetch(url);
    console.log(result);
}

var g=gen();
var result=g.next();
result.value.then(function(data){
    return data.json();
}).then(function(data){
    g.next(data);
}).catch(function(error){
    console.log('error!');
});