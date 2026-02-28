const fs  = require("fs");
//these are done synchronously one by one
// const intro = fs.readFileSync("a.txt","utf-8");
// console.log(intro);
// const nextQ = fs.readFileSync("b.txt","utf-8");
// console.log(nextQ);

function print(err,data){
    console.log(data);
}

fs.readFile("a.txt","utf-8",print);
fs.readFile("b.txt","utf-8",print);
console.log("Done");