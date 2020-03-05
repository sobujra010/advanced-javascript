let bonus = 20;
function sum(num1, num2){
    const result = num1 + num2 + bonus;
    // console.log(bonus);
    if(result > 10){
        var mood = "happy";
        console.log(mood);
    }
    console.log(mood);
    return result;
}
const output = sum(2, 3);
// console.log(bonus);
// console.log(output);