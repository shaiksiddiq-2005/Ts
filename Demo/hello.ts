console.log("Hello World!");


// TypeScript Array
 let Names:String[]= ["Siddiq", "Farooq"]; // It only takes the data which mentioned particular data type.

 let Ages:Number[]=[20,19];

 let rollNumber:( string| number)[] = [1,2, "A1", "x1"]; // It accpets the data which mentioned particular data type. It can take multiple data types.

console.log("Names: ", Names);
console.log("Ages: ", Ages);
console.log("Roll Numbers: ", rollNumber);

Names.push("Shabu"); // It will add the new data at the end of the array.
Ages.push(21); 
rollNumber.pop(); // It will remove the last data from the array.
console.log("----------------------------------------------------------")
console.log("Updated Names: ", Names);
console.log("Updated Ages: ", Ages);
console.log("Updated Roll Numbers: ", rollNumber);