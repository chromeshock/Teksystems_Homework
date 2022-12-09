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

//e. Drivers Ed
let age = 19;
if (age >= 16) {
    console.log('Here are the keys! ');
}else if (age < 16) {
    console.log("Sorry, you're too young");
}

//II. Loops
//A. The basics

for (let i = 0; i <= 10; i++) {
    
    console.log(i);
}

//2.
for (let i = 10; i <= 400; i++) {
    
    console.log(i);
}

//3.
for (let i = 12; i <= 4000; i++, i +=2) {
    
    console.log(i);
}

//B. Get even
for (let i = 0; i <=100; i+=2) {
    
    console.log(i, '<--is an even number');
}

//C. Give me Five. not finished
for (let number = 5; number <=100; number +=5) {
       console.log('I found a ', number, 'High five!');
       for (number = 3; number <=100; number +=3) {
        console.log('I found a ', number, 'Three is a crowd');
  }
}

/*D. Saving account
Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
Check your work! Your bank_account should have $55 in it.

You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
Check your work! Your bank_account should have $10,100 in it.



let bank_account = 0;
let sum = 1;
for (let i = 1; i <= 10; i ++) {
     bank_account = i * 5.5;
     sum =  bank_account;

    console.log('Current Balance $', sum);
}


//double pay
let bank_account = 0;
let sum = 1;
for (let i = 1; i <= 100; i ++) {
     bank_account = (i * 101);
     sum =  bank_account;

    console.log('Current Balance $', sum);
}

/*III. Arrays & Control flow
A.Talk about it:
What are the things in an array called?
    those are elements

Do Arrays guarantee those things will be in order?
    Yes, unless the order is changed with addition or subtaction of elements

What real-life thing could you model with an array?
    S shoping cart for e-commerce is an exmaple

B. Easy Does It
1.Create an array that contains three quotes and store it in a variable called quotes  

let arr = ['To be' + ' or ' +  'not to be!'];
let quotes;
quotes = arr;
console.log(arr);

/*C. Accessing elements
Given the following array const randomThings = [1, 10, "Hello", true]

How do you access the 1st element in the array?
    with indexOf
Change the value of "Hello"to "World"

Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
const randomThings = [1, 10, "Hello", true];
console.log(randomThings.indexOf(1));
randomThings.splice(2, 0, 'Hello World');
console.log(randomThings[2]);

D. Change values
Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

What would you write to access the 3rd element of the array?
    .splice method

Change the value of "Github" to "Octocat"

Add a new element, "Cloud City" to the array

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
ourClass.splice(4, 0, 'Octocat');
console.log(ourClass[4]);
const newAdd = ourClass.push('Cloud City');
console.log(ourClass);

E. Mix It Up
Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

Given the following array: const myArray = [5, 10, 500, 20]

Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
Remove the 5from the beginning of the array.
Add the string "Bob Marley"to the beginning of the array.
Remove the string of your choice from the end of the array.
Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
*/
const myArray = [5, 10, 500, 20];
myArray.push('Aegon');
console.log(myArray);
myArray.shift(5);
console.log(myArray);
myArray.unshift('Bob Marley');
console.log(myArray);
myArray.splice(4, 0, '');
console.log(myArray);

