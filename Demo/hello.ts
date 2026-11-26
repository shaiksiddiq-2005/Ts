function sum(a:number,b:number):number{
    return a+b
}
console.log(`Addtion of a and b is:`+sum(100,200));
console.log(`Addtion of a and b is:`+sum(500,200));




function details(name:string, clg:string, rollNo: Number):string {
    console.log(`I am ${name} from ${clg} my rollnumber is ${rollNo}`);
    return "siddiq"; // error because we have used void for output type.
}
let x= details("siddiq","raghu",200);
console.log(x)





// Void does not allows to retun the output
function Intro(name:string, clg:string, rollNo: Number):void {
    console.log(`I am ${name} from ${clg} my rollnumber is ${rollNo}`);
    return "siddiq"; // error because we have used void for output type.
}
let y= Intro("siddiq","raghu",200);
console.log(y)