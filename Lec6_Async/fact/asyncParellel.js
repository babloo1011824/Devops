//multiple files
//async code
//simultaniously read all file and get data!!!
const fs = require("fs");

console.log("start");

fs.readFile("./f1.txt",function(err,data)){  //
    console.log(data+"");                    //
}                                            //
fs.readFile("./f2.txt",function(err,data)){  //      these function can be printed randomly
    console.log(data+"");                    //      they will execute in order how they are waiting in the queue
}                                            //
fs.readFile("./f3.txt",function(err,data)){  //
    console.log(data+"");                    //
}                                            //

console.log("end");