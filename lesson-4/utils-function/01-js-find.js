const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

console.log("3.1 Tìm giá trị đầu tiên trong scores > 80:");
const firstScoreAbove80 = scores.find(function(score) {
    return score > 80;
});
console.log("Mảng scores:", scores);
console.log("Điểm đầu tiên > 80:", firstScoreAbove80);

console.log("\n3.2 Tìm giá trị đầu tiên trong ages > 20:");
const firstAgeAbove20 = ages.find(function(age) {
    return age > 20;
});
console.log("Mảng ages:", ages);
console.log("Tuổi đầu tiên > 20:", firstAgeAbove20);

console.log("\n3.3 Tìm từ đầu tiên trong words có độ dài > 5:");
const firstLongWord = words.find(function(word) {
    return word.length > 5;
});
console.log("Mảng words:", words);
console.log("Từ đầu tiên có độ dài > 5:", firstLongWord);
