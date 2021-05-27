//multiple files
//async code
//f1 data --> f2 data --> f3 data
//it is call callback Hell
// promisses prevent from call back Hell

const fs = require("fs");

console.log("start");

fs.readFile("./f1.txt",function(err,data){  
    console.log(data+""); 
    fs.readFile("./f2.txt",function(err,data){  
        console.log(data+"");
        fs.readFile("./f3.txt",function(err,data){  
            console.log(data+"");
        })

    } ) 

})
console.log("end");