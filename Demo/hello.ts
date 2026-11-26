console.log("Hello World!");

// String
let myName:string = "Siddiq"; // It only accepts string values
let college:string = "Raghu";

// Number 
let age: number = 25; // It only accepts number values

// Boolean
let isStudent:boolean = true; // It only accepts boolean values

let graduationYear:(undefined| number | string)= undefined;  // It accepts only number or string or undefined
graduationYear = 2027;

let storeAnyThing: any; // We can store any type of value in this variable called "storeAnyThing" because we have used "any" type.
storeAnyThing = 25;
storeAnyThing = true;

console.log(`My name is ${myName}, I am from ${college} college, and my age is ${age}`)
console.log("Im a student:",isStudent);
console.log("My Graduation Year:",graduationYear);
console.log("Any Value:",storeAnyThing);
