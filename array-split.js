const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const part = num.slice(3, 8);
const remove = num.splice(2, 5, 100);
// console.log(remove);
// console.log(num);
const together = num.join(" plus ")
console.log(together);