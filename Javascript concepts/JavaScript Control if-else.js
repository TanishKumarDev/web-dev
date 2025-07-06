/*
JavaScript if-else statement executes a block of code based on a condition. If the condition evaluates to true, the code inside the "if" block executes; otherwise, the code inside the "else" block, if present, executes.

Such control statements are used to cause the flow of execution to advance and branch based on changes to the state of a program.
 */

// JavaScript if-statement
let number = 10;

if(number > 5){
    console.log("Number is greater than 5");
}

// JavaScript if-else statement
let age = 18;

if(age >= 18){
    console.log("You can vote");
}else{
    console.log("You can't vote");
}

// JavaScript nested-if statement
let number1 = 100;

if(number1 == 10 ){
    if(number1 < 15){
        console.log("Number is less than 15");
    }
    if(number1 > 15){
        console.log("Number is greater than 15");
    } 
    else {
        console.log("Number is not greater than 5");
    }
}

// JavaScript if-else-if ladder statement
/*
The if statements are executed from the top down. As soon as one of the conditions controlling the if is true, the statement associated with that if is executed, and the rest of the ladder is bypassed. If none of the conditions is true, then the final else statement will be executed.
 */
// JavaScript program to illustrate nested-if statement
let i = 20;

if (i == 10)
    console.log("i is 10");
else if (i == 15)
    console.log("i is 15");
else if (i == 20)
    console.log("i is 20");
else
    console.log("i is not present");