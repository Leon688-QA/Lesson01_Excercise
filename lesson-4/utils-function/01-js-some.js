const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

console.log("5.1 Kiểm tra scores có giá trị nào > 80 không:");
const hasScoreAbove80 = scores.some(function(score) {
    return score > 80;
});
console.log("Mảng scores:", scores);
console.log("Có điểm nào > 80?", hasScoreAbove80);

console.log("\n5.2 Kiểm tra ages có giá trị nào < 18 không:");
const hasMinor = ages.some(function(age) {
    return age < 18;
});
console.log("Mảng ages:", ages);
console.log("Có tuổi nào < 18?", hasMinor);

console.log("\n5.3 Kiểm tra words có từ nào dài > 5 không:");
const hasLongWord = words.some(function(word) {
    return word.length > 5;
});
console.log("Mảng words:", words);
console.log("Có từ nào dài > 5?", hasLongWord);
