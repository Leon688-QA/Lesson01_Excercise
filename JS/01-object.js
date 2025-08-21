// #Object Excersise#

// Bài 1
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
};
console.log("Năm sản xuất của xe:", car.year);

// Bài 2
const person = {
    name: "NHL",
    address: {
        street: "123 Lê Lợi",
        city: "Hồ Chí Minh",
        country: "Việt Nam"
    }
};
console.log("Tên đường:", person.address.street);

// Bài 3
const student = {
    name: "Leon QA",
    grades: {
        math: 100,
        english: 90
    }
};
console.log("Điểm môn toán:", student["grades"]["math"]);

// Bài 4
const settings = {
    volume: 50,
    brightness: 80
};
settings.volume = 75;
console.log("Settings sau khi thay đổi:", settings);

// Bài 5
const bike = {
    make: "Honda",
    model: "Winner X"
};
bike.color = "Red";
console.log("Bike sau khi thêm màu:", bike);

// Bài 6
const employee = {
    name: "NHL",
    age: 23,
    position: "Developer"
};
delete employee.age;
console.log("Employee sau khi xóa age:", employee);

// Bài 7
const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
};
console.log("Trường học:", school);
