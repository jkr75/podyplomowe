const fs = require("fs");
let argNumOk = false;
const argNum = 3;

if(process.argv.length == argNum) {
    argNum = true;
} else if(process.argv.lenght < argNum){
    console.log("No parameters");
} else {
    console.log("Too mamy parameters")
}

let dirPath = process.argv[2];
if(argNumOk){
    console.log(fs.readdirSync(dirPath));
}

// console.log(process.argv[2] + process.argv[3]);