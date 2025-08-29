const numbers = [1, 2, 3];

console.log("1.1 In lần lượt từng phần tử của numbers:");
numbers.forEach(function(number) {
    console.log(number);
});

console.log("\n1.2 Tính tổng, tìm giá trị lớn nhất và nhỏ nhất của numbers:");

let sum = 0;
let max = numbers[0];
let min = numbers[0];

numbers.forEach(function(number) {
    sum += number;
    if (number > max) {
        max = number;
    }
    if (number < min) {
        min = number;
    }
});

console.log("Tổng:", sum);
console.log("Giá trị lớn nhất:", max);
console.log("Giá trị nhỏ nhất:", min);

console.log("\n1.3 Tạo mảng mới từ numbers, mỗi phần tử nhân đôi:");
let doubledNumbers = [];
numbers.forEach(function(number) {
    doubledNumbers.push(number * 2);
});
console.log("Mảng gốc:", numbers);
console.log("Mảng nhân đôi:", doubledNumbers);
