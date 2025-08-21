// #Function Excersise#

// Bài 1
function multiply(a, b) {
    console.log(`${a} x ${b} = ${a * b}`);
}
multiply(5, 3);
multiply(10, 2);

// Bài 2
function findMin(a, b, c) {
    return Math.min(a, b, c);
}
console.log("Giá trị nhỏ nhất của 5, 3, 8:", findMin(5, 3, 8));
console.log("Giá trị nhỏ nhất của 12, 1, 6:", findMin(12, 1, 6));

// Bài 3
function getTopStudents(students, threshold) {
    const topStudents = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            topStudents.push(students[i].name);
        }
    }
    return topStudents;
}

const students = [
    {name: "A", score: 85},
    {name: "B", score: 92},
    {name: "C", score: 78},
    {name: "D", score: 95},
    {name: "E", score: 82}
];

console.log("Học sinh giỏi (>= 85):", getTopStudents(students, 85));
console.log("Học sinh xuất sắc (>= 90):", getTopStudents(students, 90));

// Bài 4
function calculateInterest(principal, rate, years) {
    const interest = principal * rate * years / 100;
    const total = principal + interest;
    return total;
}

console.log("Tiền gửi 10,000,000 VND, lãi suất 8%/năm, gửi 3 năm:");
console.log("Tổng tiền nhận được:", calculateInterest(10000000, 8, 3), "VND");

console.log("Tiền gửi 5,000,000 VND, lãi suất 6%/năm, gửi 5 năm:");
console.log("Tổng tiền nhận được:", calculateInterest(5000000, 6, 5), "VND");
