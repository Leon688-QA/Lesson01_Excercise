const str = "Playwright";
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

console.log("2.1 In lần lượt từng ký tự của str:");
for (let char of str) {
    console.log(char);
}

console.log("\n2.2 Tạo mảng đảo ngược từ str:");
let reversedArr = [];
for (let char of str) {
    reversedArr.unshift(char); 
}
console.log("Chuỗi gốc:", str);
console.log("Mảng đảo ngược:", reversedArr);
console.log("Chuỗi đảo ngược:", reversedArr.join(''));

console.log("\n2.3 Tìm và in vị trí đầu tiên và cuối cùng của giá trị 3 trong arr:");
let firstIndex = -1;
let lastIndex = -1;
let index = 0;

for (let value of arr) {
    if (value === 3) {
        if (firstIndex === -1) {
            firstIndex = index;
        }
        lastIndex = index; 
    }
    index++;
}

console.log("Mảng:", arr);
console.log("Vị trí đầu tiên của số 3:", firstIndex);
console.log("Vị trí cuối cùng của số 3:", lastIndex);

console.log("\n2.4 Lọc các phần tử xuất hiện 1 lần trong dupArr:");
let uniqueElements = [];

for (let value of dupArr) {
    let count = 0;
    for (let item of dupArr) {
        if (item === value) {
            count++;
        }
    }
    
    if (count === 1 && !uniqueElements.includes(value)) {
        uniqueElements.push(value);
    }
}

console.log("Mảng gốc:", dupArr);
console.log("Các phần tử xuất hiện 1 lần:", uniqueElements);
