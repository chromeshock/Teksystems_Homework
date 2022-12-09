/*
1. How do we assign a value to a variable? A. With the assignment operator
     either by using let, var or const then the = followed by the value.

2. How do we assign an existing variable to a new variable?
    After initializaing it : let x = 0; then x = 10;

 3. Remind me, what are declare, assign, and define?
    declare is when you stating your variable, assign is when you give that variable a value and define is when you are instructing what the function or variable should do when evoked.

4.What is pseudocoding and why should you do it?
    pseudocoding is basically plain english or human language writing out how a program or piece of code should logically work. It's not real working code.

5. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
    Maybe 30% to 40%. I guess it depends on the complexity of the program and the developer.
*/

//B.Strings
let firstVariable = 'Hello World';
firstVariable = 5;
secondVariable = firstVariable;
secondVariable = 'Help Me!';
console.log(firstVariable); // 5

let yourName = 'Hector';
console.log('Hello, my name is ', yourName);

//C. Booleans
const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  if (a === 4 && b === 53) {
    console.log('a & b are ',true);
  }else {
    console.log(false);
  }

  //next
  if (c === 57 && d === 16) {
    console.log('c & d are ',true);
  }else {
    console.log('c & d are ', false);
  }

 //next
 if ('Name' === 'Name' && 'Name' === 'Name') {
    console.log('Name & Name are both ', true);
  }else {
    console.log('Name & Name are both', false);
  }
 
 // FOR THE NEXT TWO, USE ONLY && OR ||
 if (true === true && false === false) {
    console.log(true);
 } else {
    console.log(false);
 }
 
 //next
 if (false === false || false === false || false != true) {
    console.log(true);
 } else {
    console.log("Something isn't right", true);
 }

//next
if (false === false) {
    console.log(true);
}

//next
if (e === 'Kevin') {
    console.log(true);
} else {
    console.log(false);
}

//next
let sum =0;
sum = a + b;
if (a + b === c) {
    console.log(sum, true);
}

//next
let sum2 = 0;
sum2 = a * a;
if (a * a === d) {
    console.log(sum2, true);
}

//next
if (48 === '48') {
    console.log(true);
} else if (48 != '48') {
    console.log(false);
}

//D. The farm
let animal;
animal = 'cow';
if (animal != 'cow') {
    console.log("Hey! You're not a cow");
} else {
    console.log(true, 'you are a cow');
}

//next




 
