const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const score = Number(input);


if (100 >= score && score >= 90) {
    console.log('A')
} else if (90 > score && score >= 80) {
    console.log('B')
} else if (80 > score && score >= 70) {
    console.log('C')
} else if (70 > score && score >= 60) {
    console.log('D')
} else {
    console.log('F')
}