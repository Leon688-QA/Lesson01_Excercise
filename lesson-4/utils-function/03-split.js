const name = "Nguyễn Văn A";
const emails = "example1@gmail.com,example2@gmail.com,example3@gmail.com";
const date = "2024-05-19";

console.log("\n=== 1. Chia name thành mảng các từ (dùng khoảng trắng) ===");
const nameWords = name.split(" ");
console.log("Chuỗi gốc:", name);
console.log("Mảng các từ:", nameWords);

console.log("\n=== 2. Chia emails thành mảng các email (dùng dấu phẩy) ===");
const emailArray = emails.split(",");
console.log("Chuỗi gốc:", emails);
console.log("Mảng emails:", emailArray);

console.log("\n=== 3. Chia date thành mảng ngày, tháng, năm (dùng dấu gạch ngang) ===");
const dateParts = date.split("-");
console.log("Chuỗi gốc:", date);
console.log("Mảng [năm, tháng, ngày]:", dateParts);
console.log("Năm:", dateParts[0]);
console.log("Tháng:", dateParts[1]);
console.log("Ngày:", dateParts[2]);
