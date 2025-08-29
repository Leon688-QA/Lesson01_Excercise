const scores = [85, 90, 78];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

console.log("6.1 Tính tổng các giá trị trong scores:");
const sumScores = scores.reduce(function(accumulator, currentValue) {
    console.log(`Bước: ${accumulator} + ${currentValue} = ${accumulator + currentValue}`);
    return accumulator + currentValue;
}, 0);
console.log("Mảng scores:", scores);
console.log("Tổng điểm:", sumScores);

console.log("\n6.2 Tính tích các giá trị trong numbers:");
const productNumbers = numbers.reduce(function(accumulator, currentValue) {
    console.log(`Bước: ${accumulator} × ${currentValue} = ${accumulator * currentValue}`);
    return accumulator * currentValue;
}, 1); 
console.log("Mảng numbers:", numbers);
console.log("Tích các số:", productNumbers);

console.log("\n6.3 Tính tổng các giá trị trong expenses:");
const totalExpenses = expenses.reduce(function(accumulator, currentValue) {
    console.log(`Bước: ${accumulator} + ${currentValue} = ${accumulator + currentValue}`);
    return accumulator + currentValue;
}, 0);
console.log("Mảng expenses:", expenses);
console.log("Tổng chi phí:", totalExpenses);
