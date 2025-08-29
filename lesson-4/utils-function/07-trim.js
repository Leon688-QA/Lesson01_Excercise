const name = " Nguyễn Văn A ";
const userInput = " 12345 ";
const email = " example@gmail.com ";

console.log("\n=== 1. Loại bỏ khoảng trắng đầu và cuối của name ===");
const trimmedName = name.trim();
console.log("Gốc: '" + name + "'");
console.log("Sau trim(): '" + trimmedName + "'");

console.log("\n=== 2. Loại bỏ khoảng trắng của userInput ===");
const trimmedInput = userInput.trim();
console.log("Gốc: '" + userInput + "'");
console.log("Sau trim(): '" + trimmedInput + "'");

console.log("\n=== 3. Loại bỏ khoảng trắng đầu của email ===");
const trimmedStartEmail = email.trimStart();
console.log("Gốc: '" + email + "'");
console.log("Sau trimStart(): '" + trimmedStartEmail + "'");
