const student = { "name": "Alex", "age": 10, "salary": 20 };

console.log("3.1 In tên và giá trị mỗi thuộc tính của student:");
for (let key in student) {
    console.log("Thuộc tính:", key, "- Giá trị:", student[key]);
}

console.log("\n3.2 Tính tổng các giá trị số trong student:");
let sum = 0;
for (let key in student) {
    let value = student[key];
    if (typeof value === 'number') {
        sum += value;
        console.log(`${key}: ${value} (là số, thêm vào tổng)`);
    } else {
        console.log(`${key}: ${value} (không phải số, bỏ qua)`);
    }
}
console.log("Tổng các giá trị số:", sum);

console.log("\n3.3 Tạo mảng chứa tên các thuộc tính của student:");
let propertyNames = [];
for (let key in student) {
    propertyNames.push(key);
}
console.log("Các thuộc tính của student:", propertyNames);