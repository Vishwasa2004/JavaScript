// Primitive  Data Type

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 // no need of defining a type of data in JavaScript
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id == anotherid); // false

const bigNumber = 2345463453465784685345346854656466n


// Reference Type (Non-Primitive)

// Array, Objects, Functions

const heroes = ["Naveen","Dhoni","Nagu"]
let myObj = {
    name:"Naveen",
    age:19
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof bigNumber)