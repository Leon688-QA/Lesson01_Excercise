const fullName = "Nguyễn Văn A";
const date = "2024-05-19";
const email = "example@gmail.com";

console.log("\n=== 1. Trích xuất họ từ fullName (từ đầu đến ký tự thứ 6) ===");
const surname = fullName.substring(0, 7); 
console.log("Tên đầy đủ:", fullName);
console.log("Họ (substring(0, 7)):", surname);

console.log("\n=== 2. Trích xuất năm từ date (4 ký tự đầu) ===");
const year = date.substring(0, 4);
console.log("Ngày tháng:", date);
console.log("Năm (substring(0, 4)):", year);

console.log("\n=== 3. Trích xuất tên miền từ email (từ sau '@') ===");
const atIndex = email.indexOf("@");
const domain = email.substring(atIndex + 1);
console.log("Tên miền (substring(" + (atIndex + 1) + ")):", domain);
