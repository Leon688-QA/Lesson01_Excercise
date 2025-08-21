// #Loop Excersise#

// Bài 1
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Tổng từ 1 đến 100:", sum);

// Bài 2
for (let i = 2; i <= 9; i++) {
    console.log(`Bảng cửu chương ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log("---");
}

// Bài 3
const oddNumbers = [];
for (let i = 1; i <= 99; i += 2) {
    oddNumbers.push(i);
}
console.log("Các số lẻ từ 1 đến 99:", oddNumbers);

// Bài 4
for (let i = 1; i <= 10; i++) {
    console.log(`user${i}@example.com`);
}

// Bài 5
const revenue = [
    {"month": 1, "total": 100},
    {"month": 2, "total": 150},
    {"month": 3, "total": 200},
    {"month": 4, "total": 180},
    {"month": 5, "total": 220},
    {"month": 6, "total": 250},
    {"month": 7, "total": 300},
    {"month": 8, "total": 280},
    {"month": 9, "total": 260},
    {"month": 10, "total": 240},
    {"month": 11, "total": 290},
    {"month": 12, "total": 320}
];

let totalRevenue = 0;
for (let i = 0; i < revenue.length; i++) {
    totalRevenue += revenue[i].total;
}
console.log("Tổng doanh thu cả năm:", totalRevenue);
