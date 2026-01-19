/**
 * functions are a block of reuseable code that can be called to perform a specific task
 * functions can only run once they are called 
 */

//function declaration
function greetUser(){
    console.log("Hello User");

}

//function call
//when a  function is run it is called a functio invokation
greetUser();
//can be displayed in the standard output
console.log(greetUser());

//functions can be composed of parameters which take a value to perform an action
function subtractNumber(firstOperand,secondOperand){
    //return is used to send a message outside of a function
    return firstOperand - secondOperand;
}
//passing values to a function for operation
console.log(subtractNumber(10,5));
console.log(subtractNumber(100,3));

/**
 * Arrow function are a modern Javascript form of function
 * Allow for shorter syntax for a Javascript function
 * An arrow function is always written as a function expression
 * 
 */

//an arrow function in use
const multiplyNumber = (operand1,operand2) => {
    return operand1*operand2;
}

//arrow funcion without parameters
const greetUserInThisFile = () => {
    "Majata Hichimi writes arrows now";
}

//function calls
console.log(multiplyNumber(10,10));
console.log(greetUserInThisFile());

//IIFE(Immediately Invoked Function Expression)
(function sayHi(userName){
    console.log("Hi".userName)
})("Majata Hichimi");

//IIFE(Immediately Invoked Function Expression)
(function sayHiToComputer(){
    console.log("Hi computer");
})();


