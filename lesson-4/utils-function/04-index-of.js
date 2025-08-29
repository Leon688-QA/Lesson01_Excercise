const name = "Nguyễn Văn A";
const email = "example@gmail.com";
const productName = "MacBook Pro";
const description = "Khóa học JavaScript cơ bản";

console.log("\n=== 2.1 Tìm vị trí 'a' trong name ===");
const indexOfA = name.indexOf("a");
console.log(`"${name}".indexOf("a"):`, indexOfA);
if (indexOfA !== -1) {
    console.log(`Ký tự 'a' được tìm thấy tại vị trí ${indexOfA}`);
} else {
    console.log("Không tìm thấy ký tự 'a'");
}

console.log("\n=== 2.2 Tìm vị trí '@' trong email ===");
const indexOfAt = email.indexOf("@");
console.log(`"${email}".indexOf("@"):`, indexOfAt);
if (indexOfAt !== -1) {
    console.log(`Ký tự '@' được tìm thấy tại vị trí ${indexOfAt}`);
    console.log(`Tên người dùng: "${email.substring(0, indexOfAt)}"`);
    console.log(`Tên miền: "${email.substring(indexOfAt + 1)}"`);
}

console.log("\n=== 2.3 Tìm vị trí 'JavaScript' trong description ===");
const indexOfJS = description.indexOf("JavaScript");
console.log(`"${description}".indexOf("JavaScript"):`, indexOfJS);
if (indexOfJS !== -1) {
    console.log(`Từ 'JavaScript' được tìm thấy tại vị trí ${indexOfJS}`);
} else {
    console.log("Không tìm thấy từ 'JavaScript'");
}
