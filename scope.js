/**
 * Scope determines the acessability of variables
 * there are three types of scope (Global Scope,Function Scope,Block Scope)
 */

//Global scoped variables are acessed from any where in our code
var x = 100;//the var keyword when declaring variables sets them to a global scope
console.log(x);
//even so when (const and let) are used outside of a code block they \are global scoped aswell
let y = 10;//global scope
const z = 1;//global scope

//function scoped variables can only be within the function
function addNumber(){
    let a = 1;
    let b = 1;
    console.log(a+b);

}

//function call
addNumber();

//block scope variables can only be accesed within the code block
{
    let firstName = 'MAjata Hichimi';
    //this can not be accessed outside of this block

}

/**
 * Code blocks
 * code blocks allow multipe statements to be treated as a single unit 
 * examples are (functions,loops and objects)
 */