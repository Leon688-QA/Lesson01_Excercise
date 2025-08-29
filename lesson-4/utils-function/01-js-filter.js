const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

console.log("2.1 Lọc các giá trị trong scores > 80:");
const scoresAbove80 = scores.filter(function(score) {
    return score > 80;
});
console.log("Mảng scores gốc:", scores);
console.log("Điểm > 80:", scoresAbove80);

console.log("\n2.2 Lọc các giá trị trong ages ≥ 18:");
const adultsAges = ages.filter(function(age) {
    return age >= 18;
});
console.log("Mảng ages gốc:", ages);
console.log("Tuổi ≥ 18:", adultsAges);

console.log("\n2.3 Lọc các từ trong words có độ dài > 5:");
const longWords = words.filter(function(word) {
    return word.length > 5;
});
console.log("Mảng words gốc:", words);
console.log("Từ có độ dài > 5:", longWords);
