const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const num1 = Number(input[0]);
const num2 = Number(input[1]);

console.log(num1+num2);