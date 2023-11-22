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