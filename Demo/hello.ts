console.log("Hello World!");

// Arrays 
// Normal Array
let names = ["John", "Jane", "Alice", "Bob", 5555, 2222];  // It takes any types of Data types
let ages =[10,20,330,40, "Hello"];  // It takes any types of Data types

// TypeScript Array
 let Names:String[]= ["Siddiq", "Farooq"]; // It only takes the data which mentioned particular data type.
 let Ages:Number[]=[20,19];


 let rollNumber:( string| number)[] = [1,2,3, "A1", "A2", ]; // It accpets the data which mentioned particular data type. It can take multiple data types.

console.log("names: ", names);
console.log("ages: ", ages);

console.log("Names: ", Names);
console.log("Ages: ", Ages);
console.log("Roll Numbers: ", rollNumber);