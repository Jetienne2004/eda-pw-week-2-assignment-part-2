// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')

// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/

// 1. WRITE YOUR DESCRIPTION HERE
// this code declared the variable "number" to equal 1
// it then states that numbers will be added to the variable
// then it sets a conditional statement saying that, once the numbers are added to the variable, if the result is greater than or equal to 2,
//the page will display the word "yes"

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// "Dane" is the variable declared
// the conditional statement states that if name is set to equal "Mary" instead, the page will greet you saying,"hi, Mary"
// if anything else besides Mary is set in the name variable, the page will ask, "how do you do?"
// because the name is "Dane", we would console log "how do you do?".

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// secret it the variable declared
// code is a separate variable woth a value of 123 declared
// the condition states that if the secret is set to super, the code value will multipky by 2
//if the code is greater than 250, the secret will be set ti the word "duper"
//in this case, the code multiplied would equal 246, which is less than 250. so the code will display "super"

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/
//the code states that the variable isStudent is set to true, Age is 34, and Zip is 55407
// the if statement states that if isStudent is true AND zip is 80000, the page will say "you're a student of the west coast"
//it also say that if isStudent is false OR the age is less than 30, the page will say, "what are your hobbies?"
// it also states if isStudent is true (only that condition), the page will console log "welcome to prime"
//lastly, if anything else is stated in the code that doesnt pertain to the above conditions, the page will ask you about the weather
// in this case, is student is true, Age is 34, and the zip code is 55407, so the page would console log "welcome to prime"

// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/

//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;
// colorOne is set to purple but not colorTwo (missing colorTwo = 'purple')
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
// if time changes then it should not be a constant (let time = 4 instead of const time).
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;
// no entry and enter commands are backwards (if minAge<= age -->console. log('enter'), else --> console. log('no entry'))
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
