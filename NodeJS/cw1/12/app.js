
const fs = require('fs');
let dir = fs.readdirSync(process.argv[2]);
console.log(dir);