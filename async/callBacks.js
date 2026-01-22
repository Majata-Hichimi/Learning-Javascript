/**
 * function sequence
 * functions are executed in the order they are called not defined
 * one after another
 */

//first function defined
function sayHi(){
    console.log('hi');
}
//second function defined
function sayBye(){
    console.log('bye');
}

//functions are called
sayHi();
sayBye();

/**
 * this creates an issue when you have to call multiple functions at once
 * to do this we pass a function as an argument in another function
 * 
 */
//first function
function callToMe(){
    console.log('\n\n\n\n\Majata!!!!!..');
}
//calledBack function
function callBackFunc(cb){
    cb();

}

callBackFunc(callToMe);

//callback with data
function sayHello(greet){
    console.log('Hello '+greet);
}

function greetThisUser(userGreet){
    const userName = 'Majata';
    userGreet(userName);
}

greetThisUser(sayHello);