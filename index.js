
var rect =require('./rectangle');
//create express app 
var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send('Hello World');
});

rectangle={
    area:(x,y)=>((x*y)/2),

    parimeter:(x,y)=>(x*y) 
}
function solveReac(l,b){
if(l<0||b<0){
    console.log('sides should be more than zero');
}

else {
    console.log('the area of the rectangle is: '+rectangle.area(l,b)+" ");
    console.log('the parameter of the rectangle is: '+rectangle.parimeter(l,b)+' ');
}}
solveReac(5,5);

// Language: javascript
