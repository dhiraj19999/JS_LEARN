"use strict";
// use strict use krne se hum witohut keyowrd varibl declare nahi kr skte
// intro to variables

// variables can store some information
// we can use that information later
// we can change that information later

// declare a variable

var firstName = "Harshit";

// use a variable
console.log(firstName);

// change value

firstName = "Mohit";

console.log(firstName);

// rules for naming variables

// you cannot start with number
// example :-
// 1value (invalid)
// value1 (valid)

var value1 = 2;
console.log(value1);

// you can use only underscore _ or dollar $ symbol
// first_name (valid)
// _firstname (valid)

// first$name (valid)
// $firstname (valid)

// you cannot use spaces
// var first_name = "harshit"; // snake case writing
// var firstName = "harshit"; // camel case writing
// first name (invalid)

// convention
// start with small letter and use camelCase

// String indexing

let firstName = "harshitdfjakldsfdf";

//  h    a   r   s   h   i   t
//  0    1   2   3   4   5   6

// console.log(firstName[0]);
// length of string
// firstName.length

console.log(firstName.length);

console.log(firstName[firstName.length - 2]);

// last Index : length - 1

// trim()
// toUpperCase()
// toLowerCase()
// slice()

let nam = "  dhiraj  ";

nam.trim(); // it removes the space but length of the varible remains same it return new varible

nam.toUpperCase(); // retrun new string and convert all letters to uppercase

let str = "suraj";
str.slice(0, 3); // it gives "sur"  as a output slice takes first and last index as a parameter but it avoids
/// last index it takes start index  to last index-1

// data types (primitive data types)
// string "harhit"
// number 2, 4, 5.6
// booleans
// undefined
// null
// BigInt
// Symbol

// let age = 22;
// let firstName = "harshit";

// // console.log(typeof age);

// // 22 -> "22"
// // convert number to string.
// age = age + "";
// console.log(typeof(age)); "22"

// // convert string to number.

// let myStr = +"34";
// console.log(typeof myStr);

// let age = "18";
// age = Number(age);
// console.log(typeof age);
// string concatenation

let string1 = "17";
let string2 = "10";

let newString = +string1 + +string2;
console.log(typeof newString);
// template string
let age = 22;
let firstName = "harshit";

// "my name is harshit and my age is 22 "
// let aboutMe = "my name is " + firstName + " and my age is " + age;

let aboutMe = `my name is ${firstName} and my age is ${age}`;

console.log(aboutMe);

// undefined
// null

// let firstName;
// console.log(typeof firstName); =>undefined
// firstName = "Harshit";
// console.log(typeof firstName, firstName);

// let myVariable = null;
// console.log(myVariable);
// myVariable = "harshit";
// console.log(myVariable, typeof myVariable);
// console.log(typeof null); => object
// bug , error

// BigInt
// let myNumber = BigInt(12);
// let sameMyNumber = 123n;
// // console.log(myNumber);
// // console.log(Number.MAX_SAFE_INTEGER); => js me kitna bada no save kr skte hai
// console.log(myNumber+ sameMyNumber);

// booleans & comparison operator

// booleans
// true, false

// let num1 = 7;
// let num2 = "7";

// console.log(num1<num2);

// == vs ===
// console.log(num1 === num2);

// != vs !==

// console.log(num1 !== num2);
// truthy and falsy values

// if else condition

// let age = 17;

// if(age>=18){
//     console.log("User can play ddlc");
// }else {
//     console.log("User can play mario");
// }

// let num = 13;

// if(num%2===0){
//     console.log("even");
// }else{
//     console.log("odd");
// }

// falsy values

// false
// ""
// null
// undefined
// 0

// truthy
// "abc"
// 1, -1

// let firstName= 0;

// if(firstName){
//     console.log(firstName);
// }else{
//     console.log("firstName is kinda empty");
// }

// ternary operator

// let age = 4;
// let drink;

// if(age>=5){
//     drink = "coffee";
// }else{
//     drink = "milk";
// }

// console.log(drink);

// ternary operator / conditional operator

// let age = 3;
// let drink = age >= 5 ? "coffee" : "milk";
// console.log(drink);

// and  or operator  => ek se jyda condition check krnne ke liye

// if(firstName[0] === "H"){
//     console.log("your name starts with H")
// }

// if(age > 18){
//     console.log("you are above 18");
// }

// if(firstName[0] === "H" && age>18){
//     console.log("Name starts with H and above 18");
// }else{
//     console.log("inside else");
// }
let firstName = "arshit";
let age = 16;

if (firstName[0] === "H" || age > 18) {
  console.log("inside if");
} else {
  console.log("inside else");
}
// nested if else

// winning number 19

// 19 your guess is right
// 17 too low
// 20 too high

let winningNumber = 19;
let userGuess = +prompt("Guess a number");

if (userGuess === winningNumber) {
  console.log("Your guess is right!!");
} else {
  if (userGuess < winningNumber) {
    console.log("too low !!!");
  } else {
    console.log("too high !!!");
  }
} // nested if else

// winning number 19

// 19 your guess is right
// 17 too low
// 20 too high

let winningNumber = 19;
let userGuess = +prompt("Guess a number");

if (userGuess === winningNumber) {
  console.log("Your guess is right!!");
} else {
  if (userGuess < winningNumber) {
    console.log("too low !!!");
  } else {
    console.log("too high !!!");
  }
}

// if
// else if
// else if
// else if
// else

// let tempInDegree = 50;

// if(tempInDegree < 0){
//     console.log("extremely cold outside");
// }else if(tempInDegree < 16){
//     console.log("It is cold outside");
// }else if(tempInDegree < 25){
//     console.log("wheather is okay ");
// }else if(tempInDegree < 35){
//     console.log("lets go for swim");
// }else if(tempInDegree < 45){
//     console.log("turn on AC");
// }else{
//     console.log("too hot!!");
// }

// console.log("hello");

// switch statement

// let day = 7;

// if(day === 0){
//     console.log("Sunday");
// }else if(day ===1){
//     console.log("Monday");
// }else if(day ===2){
//     console.log("Tuesday");
// }else if(day ===3){
//     console.log("Wednesday");
// }else if(day ===4){
//     console.log("Thrusday");
// }else if(day ===5){
//     console.log("Friday");
// }else if(day ===6){
//     console.log("Saturday");
// }else{
//     console.log("Invalid Day");
// }

let day = 9;

switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thrusday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid Day");
}
// while loop

// 0 se 9
// dry don't repeat yourself
let i = 0; // 1 2 3 4

while (i <= 9) {
  console.log(i);
  i++;
}
console.log(`current value of i is ${i}`);
console.log("hello");
// while loop example
let num = 100;
// let total = 0;   //1 + 2 +3
// let i = 0;

// while(i<=100){
//     total = total + i;
//     i++;
// }

// console.log(total);

// intro to for loop
// print 0 to 9

for (let i = 0; i <= 9; i++) {
  console.log(i);
}

// console.log("value of i is ",i);

// for loop example

let total = 0;

let num = 100;

for (let i = 1; i <= num; i++) {
  total = total + i;
}

console.log(total);
// break keywork

// continue keyword

// for(let i = 1; i<=10; i++){
//     if(i===4){
//         break;
//     }
//     console.log(i);
// }

// for(let i = 1; i<=10; i++){
//     if(i===4){
//         continue;
//     }
//     console.log(i);
// }
console.log("hello there");
