interface studentDetails {
    studentName : string,
    studentId : number,
    studentSkills : string[],
    isStudentPassed : boolean
}

let Std1: studentDetails = {
    studentName : "siddiq",
    studentId : 25,
    studentSkills : ["coding", "playing"],
    isStudentPassed : true

};


let Std2 : studentDetails ={
    studentName : "Farooq",
    studentId : 30,
    studentSkills : ["boxing", "playing"],
    isStudentPassed : false
}

console.log("Student1", Std1);
console.log("Student2", Std2.studentSkills[0]);