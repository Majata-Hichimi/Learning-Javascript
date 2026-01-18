//Variables are containers that are used to hold values in Javascript code 
//variables are made up of an identifer,assignment operator and a value
//When a variable is made in code it is refered to as a declararion of a value 

//Using (let)
//variables declared with the let keyword have a block scope
//such a variable must be declared before use
//variables within a code block cannot be accessed outside of it 
{
    let x = 100;//the let keyword declares a value with a blocj scope
    //the let keyword cannot allow you to redeclare a variable again
}

//the global scope is when a value can be accessed outside of its block by the code
{
    var y = 100;
}

//redeclaration
var name = 'majata';
var name = 'ethan';

//variable hoisting
//this means a variable can be used before it is declared
firstName = 'Majata';
var firstName;

//constants in Javascript
//constants are values that cannot be redeclared,reassigned and have a block scope
const ageInYears=21;