//loops are a block of code that execute an instruction repeatedly for as long as a specified condition is reached

/**
 * the for loop
 * is composed of 3 optional expressions
 * (expr1,expr2,expr3)
 * expr1= executed once execution of code block
 * expr2= is the condition for the execution of a code block
 * expr3=is executed each time the block is executed
 */
for(let i =0;i<10;i++){
  if(i===5){continue;}
  console.log("I have been programmed!!");
}


/**
 * the do while loop
 * will execute a bloc of code first and then check if a condition is met
 * 
 */
let count = 0;

do {
  //the break statment is used to jump out of a loops
  if (count === 5) {
    break; // Immediately exits the loop
  }
  console.log("Count is: " + count);
  count++;
} while (count < 10);

console.log("Loop exited.");

/**
 * the while loop is block of code that will run for as long as a condition is true
 */
let i = 0;
while(i=true){

  console.log(1);
}