const math = require('./math');

const fs = require('fs');

const as = fs.readFileSync('a.txt');
const bs = fs.readFileSync('b.txt');
const a = parseInt(as);
const b = parseInt(bs);

const resultAdd = 'a + b = ' + math.add(a,b);
const resultSub = 'a - b = ' + math.sub(a,b);
const resultMul = 'a * b = ' + math.mul(a,b);
const resultDiv = 'a / b = ' + math.div(a,b);

console.log(resultAdd);
console.log(resultSub);
console.log(resultMul);
console.log(resultDiv);

fs.writeFileSync('wynik.txt', 'Dodawanie liczb ' + a + ' i ' + b + ' daje w wyniku '+ resultAdd + '\n');
fs.appendFileSync('wynik.txt', 'Odejmowanie liczb ' + a + ' i ' + b + ' daje w wyniku '+ resultSub + '\n');
fs.appendFileSync('wynik.txt', 'Mnożenie liczb ' + a + ' i ' + b + ' daje w wyniku '+ resultMul + '\n');
fs.appendFileSync('wynik.txt', 'Dzielenie liczb ' + a + ' i ' + b + ' daje w wyniku '+ resultDiv + '\n');

var data = fs.readFileSync('wynik.txt');
console.log(data.toString());