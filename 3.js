// 1. 
let result = 5 + 5 + '5';
console.log(result); // "105"
console.log(typeof result); // string

// 2. 
let email = "zvermedick3@gmail.com";

let hasAtSymbol = email.includes("@");
let emailLength = email.length;

console.log("Містить @:", hasAtSymbol);
console.log("Довжина email:", emailLength);

// 3.
let word1 = "My";
let word2 = "name";
let word3 = "is";

let fullName = word1 + " " + word2 + " " + word3;
fullName += " Viktor";

console.log(fullName); 

// 4. 
let userName = "Олександро";
let payment = 300;

alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);