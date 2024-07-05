//Conditional statement

//1.Simple if

let age = 45;
if (age >= 18) {
    console.log("You are eligible for vote");
}
//2.if else statement
//->BI-CONDOTIONAL STATEMENT:-
// When the condition is elvaluates to true then those statement are execute which are written inside the if block
// otherwise else block is executed
let Age = 16;
if (Age >= 18) {
    console.log("You are eligible for vote");
}
else {
    console.log("You are not eligible for vote");
}
//3.nested if statement
//Another if block is present inside the if block
let name = "Shantanu";
if (age >= 18) {
    if (name == "Shantanu") {
        console.log("You are eligible for vote");
    }
}
//4.nested if else statement
if (age >= 18) {
    if (name == "Shantnu") {
        console.log("You are Eligible for vote");
    }
    else {
        console.log("Name is not matcing");
    }
}
else {
    console.log("You are not eligible for vote");
}

//5.else if statement
let a = 10;
let b = 20;
let c = 30;
if (a > b && a > c) {
    console.log("The greatest number is" + a);
}
else if (b > a && b > c) {
    console.log("The greatest number is" + b);
}
else {
    console.log("The greatest number is" + c);
}

// *MULTI-CONDITIONAL STATEMENT 
// 1.switch statement:-
//Whenever  we have multiple contidion shows then we use switch statement
let ch = 1;
switch (ch) {
    case 1:
        console.log("MON DAY");
        break;
    case 2:
        console.log("TUES DAY");
        break;
    case 3:
        console.log("WEDNES DAY");
        break;
    case 4:
        console.log("THURS DAY");
        break;
    case 5:
        console.log("FRI DAY");
        break;
    case 6:
        console.log("SATUR DAY");
        break;
    case 7:
        console.log("SUN DAY");
        break;
        default:
            console.log("Please Enter valid input!");
}