const phoneNumber = "0123 456 789";
const report = "Có một lỗi trong hệ thống.";
const numbersStr = "1,234,567";


console.log("\n=== 1. Thay khoảng trắng bằng '.' trong phoneNumber ===");
const phoneWithDots = phoneNumber.replace(" ", ".");
const phoneWithAllDots = phoneNumber.replace(/ /g, "."); 
console.log("Gốc:", phoneNumber);
console.log("replace(' ', '.'):", phoneWithDots); 
console.log("replace(/ /g, '.'):", phoneWithAllDots); 

console.log("\n=== 2. Thay 'lỗi' bằng 'bug' trong report ===");
const reportWithBug = report.replace("lỗi", "bug");
console.log("Gốc:", report);
console.log("replace('lỗi', 'bug'):", reportWithBug);

console.log("\n=== 3. Thay ',' bằng '.' trong numbersStr ===");
const numbersWithDots = numbersStr.replace(",", ".");
const numbersWithAllDots = numbersStr.replace(/,/g, ".");
console.log("Gốc:", numbersStr);
console.log("replace(',', '.'):", numbersWithDots);
console.log("replace(/,/g, '.'):", numbersWithAllDots);
