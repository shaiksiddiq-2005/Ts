console.log("Hello World!");

//objects
 let Name:string = "Siddiq";

let ProjectDetails:{
    ProjectName : string,
    ProjectDescription : string,
    TeamSize : number,
    isCompleted ?: boolean   // ? is an optinal property!
} = {
    ProjectName: "AI resume Generator",
    ProjectDescription: "This project is used to generate the resume using AI.",
    TeamSize : 5,
    isCompleted : false
};


console.log("project details : ",ProjectDetails);