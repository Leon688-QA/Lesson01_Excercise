const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

console.log("1.1 Kiểm tra tất cả giá trị trong scores có > 70 không:");
const allScoresAbove70 = scores.every(function(score) {
    return score > 70;
});
console.log("Mảng scores:", scores);
console.log("Tất cả điểm > 70?", allScoresAbove70);

console.log("\n1.2 Kiểm tra tất cả giá trị trong ages có > 15 không:");
const allAgesAbove15 = ages.every(function(age) {
    return age > 15;
});
console.log("Mảng ages:", ages);
console.log("Tất cả tuổi > 15?", allAgesAbove15);

console.log("\n1.3 Kiểm tra tất cả từ trong words có độ dài > 3 không:");
const allWordsLengthAbove3 = words.every(function(word) {
    return word.length > 3;
});
console.log("Mảng words:", words);
console.log("Tất cả từ có độ dài > 3?", allWordsLengthAbove3);
