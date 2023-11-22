let score = "true"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "7" => 7
// "7abc" => NaN
// true => 1; false => o
// null => 0

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => ture; 0 => false
// "" => false
// "Naveen" => true

let someNumber = 7

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// ************Operations**************

let value = 3
let negValue = -value
console.log(negValue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);

let str1 = "Hello"
let str2 = "Naveen"

let str3 = str1 + str2
// console.log(str3);

// console.log("1"+2);
// console.log("1"+2+2);
// console.log(1+2+"2");

// console.log(+true)
// console.log(+"")

// let num1, num2, num3

// num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);