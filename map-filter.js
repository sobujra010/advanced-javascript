const number = [10, 12, 13, 11, 14, 15];
// const output = [];

// for(let i = 0; i < number.length; i++){
//     const element = number [i];
//     const result = element * element;
//     output.push(result);
// }

// const square = element => element * element;
// const square = x => x * x;

// const result = number.map(function (element) {
//     return element * element;
// })
// const result = number.map(x => x * x);
// console.log(result);

const bigger = number.filter(x => x > 10);
const isThere = number.find(x => x > 10);
console.log(isThere);