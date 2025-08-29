const name = "Nguyễn Văn A";
const email = "example@gmail.com";
const productName = "MacBook Pro";
const description = "Khóa học JavaScript cơ bản";

console.log("\n=== 1.1 Kiểm tra 'Nguyễn' trong name ===");
const hasNguyen = name.includes("Nguyễn");
console.log(`"${name}".includes("Nguyễn"):`, hasNguyen);

console.log("\n=== 1.2 Kiểm tra '@' trong email ===");
const hasAtSign = email.includes("@");
console.log(`"${email}".includes("@"):`, hasAtSign);

console.log("\n=== 1.3 Kiểm tra 'Pro' trong productName ===");
const hasPro = productName.includes("Pro");
console.log(`"${productName}".includes("Pro"):`, hasPro);
