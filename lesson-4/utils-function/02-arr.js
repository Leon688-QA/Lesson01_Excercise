let numbers = [1, 2, 3];
let names = ["Alice", "Bob", "Charlie"];

console.log("\n=== 1. PUSH - Thêm phần tử vào cuối mảng ===");
console.log("Trước khi push:");
console.log("numbers:", numbers);
console.log("names:", names);

let newLengthNumbers = numbers.push(4);
let newLengthNames = names.push("David");

console.log("Sau khi push:");
console.log("numbers:", numbers);
console.log("names:", names);

console.log("\n=== 2. POP - Loại bỏ phần tử cuối mảng ===");
console.log("Trước khi pop:");
console.log("numbers:", numbers);

let removedElement = numbers.pop();

console.log("Sau khi pop:");
console.log("numbers:", numbers);
console.log("Phần tử đã loại bỏ:", removedElement);

console.log("\n=== 3. UNSHIFT - Thêm phần tử vào đầu mảng ===");
numbers = [1, 2, 3];
names = ["Alice", "Bob", "Charlie"];

console.log("Trước khi unshift:");
console.log("numbers:", numbers);
console.log("names:", names);

let newLengthNumbers2 = numbers.unshift(0);
let newLengthNames2 = names.unshift("David");

console.log("Sau khi unshift:");
console.log("numbers:", numbers);
console.log("names:", names);

console.log("\n=== 4. SHIFT - Loại bỏ phần tử đầu mảng ===");
numbers = [1, 2, 3, 4];

console.log("Trước khi shift:");
console.log("numbers:", numbers);

let removedFirstElement = numbers.shift();

console.log("Sau khi shift:");
console.log("numbers:", numbers);
