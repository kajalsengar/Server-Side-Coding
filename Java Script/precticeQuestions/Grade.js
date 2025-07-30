let marks = prompt("Enter the marks of student..");


if (marks <=100 && marks >=80 ) {
    console.log("Your grade is A");
} else if (marks <= 89 && marks >= 70){
    console.log("Your grade is B");
} else if (marks <= 69 && marks >= 60) {
    console.log("Your grade is C");
} else if (marks <= 59 && marks >= 50) {
    console.log("Your grade is D");
}else{
    console.log("You are  Fail")
}