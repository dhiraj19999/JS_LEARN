//intro to arrays
// reference type
// how to create arrays

// ordered collection of items

// let fruits = ["apple", "mango", "grapes"];
// let numbers = [1,2,3,4];
// let mixed = [1,2,2.3, "string", null, undefined];
// console.log(mixed);
// console.log(numbers);
// console.log(fruits[2]);
let fruits = ["apple", "mango", "grapes"];
let obj = {}; // object literal
// console.log(fruits);
// fruits[1] = "banana";
// console.log(fruits);
console.log(typeof fruits);
console.log(typeof obj);
console.log(Array.isArray(fruits));
console.log(Array.isArray(obj));

// array push pop

// array shift unshift

let fruits = ["apple", "mango", "grapes"];
console.log(fruits);
// push
// fruits.push("banana");
// console.log(fruits);
// pop
// let poppedFruit = fruits.pop();
// console.log(fruits);
// console.log("popped fruits is", poppedFruit);

// unshift
// fruits.unshift("banana");
// fruits.unshift("myfruit");
// console.log(fruits);

// shift
// let removedFruit = fruits.shift();
// console.log(fruits);
// console.log("removed fruits is ", removedFruit);

/*Non-Primitive Data Types in Js
Objects
Array
Functions
Main difference between Primitive and Non-primitive:
Primitive data types hold the actual value of a variable. Non-primitive data types hold the memory 
location/address of the value of a variable.
Primitive value cannot be changed (Immutable), Non-primitive data type value can be changed.
Primitive data types are stored by value and Non-primitive data types are stored by reference.*/

// reference types
// array
let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1);
console.log("array2", array2);
array1.push("item3");
console.log("after pushing element to array 1");
console.log("array1", array1);
console.log("array2", array2);

// spread operator
let array1 = ["item1", "item2"];
let oneMoreArray = ["item3", "item4"];
let array2 = [...array1, ...oneMoreArray];

let arr1 = ["x", "a"];
let arr2 = arr1;

console.log(arr1 == arr2); // it gives true becuse arr2 point towards arr1   memory location both points towards same memory location

let arr3 = ["x", "a"];
let arr4 = ["x", "a"];

console.log(arr3 == arr4); // it gives false becuse both have diff memory address

// array destructuring
const myArray = ["value1", "value2", "value3", "value4"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);
let [myvar1, myvar2, ...myNewArray] = myArray;
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);
console.log(myNewArray);

// use const for creating array

// heap memory ["apple", "mango"] 0x11 == yaha kuch memory address hoga

// const fruits = ["apple", "mango"]; // 0x11
// fruits.push("banana");
// console.log(fruits); error isliye nahi dega becuse humne koi naya aaray yaniki koi new memory location nahi diya hai
fruits = ["apple"]; // agar hum yese kre to error dega becuse yaha hum new value de rahe hai ie new memory location

// objects reference type
// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// objects don't have index

// how to create objects

// const person = {name:"Harshit",age:22};
const person = {
  name: "harshit",
  age: 22,
  hobbies: ["guitar", "sleeping", "listening music"],
};
console.log(person);

// how to access data from objects
// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person.hobbies);

// how to add key value pair to objects
person["person"] = "male";
console.log(person);

// how to iterate object
const person = {
  name: "harshit",
  age: 22,
  "person hobbies": ["guitar", "sleeping", "listening music"],
};

// for in loop
// Object.keys

// for(let key in person){
//     // console.log(`${key} : ${person[key]}`);
//     console.log(key," : " ,person[key]);
// }

// console.log(typeof (Object.keys(person)));
// const val = Array.isArray((Object.keys(person)));
// console.log(val);

// for(let key of Object.keys(person)){
//     console.log(person[key]);
// }

// spread operator in objects
const obj1 = {
  key1: "value1",
  key2: "value2",
};
const obj2 = {
  key1: "valueUnique",
  key3: "value3",
  key4: "value4",
};

// const newObject = { ...obj2, ...obj1, key69: "value69" };
// const newObject = { ...["item1", "item2"] };
// const newObject = { ..."abcdefghijklmnopqrstuvwxyz" };
// console.log(newObject);

// object destructuring
const band = {
  bandName: "led zepplin",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "kashmir",
};

let { bandName, famousSong, ...restProps } = band;
console.log(bandName);
console.log(restProps);

// objects inside array
// very useful in real world applications

const users = [
  { userId: 1, firstName: "harshit", gender: "male" },
  { userId: 2, firstName: "mohit", gender: "male" },
  { userId: 3, firstName: "nitish", gender: "male" },
];
for (let user of users) {
  console.log(user.firstName);
}

//  function
function sumThreeNumbers(number1, number2, number3) {
  return number1 + number2 + number3;
}
/*A function expression in JavaScript is a way to define a function and assign it to a variable. This contrasts with a 
function declaration, where a function is defined with the function keyword followed by the function name. Function 
expressions can be anonymous (without a name) or named.

Function Declaration vs. Function Expression
Function Declaration:

js
Copy code
function greet() {
    console.log("Hello!");
}
greet(); // Outputs: Hello!
Function Expression:

js
Copy code
const greet = function() {
    console.log("Hello!");
};
greet(); // Outputs: Hello!
Key Characteristics of Function Expressions
Anonymous Functions:
Function expressions can be anonymous, meaning they don't have a name.


const greet = function() {
    console.log("Hello!");
}*/

// default parameters

// function addTwo(a,b){
//     if(typeof b ==="undefined"){
//         b = 0;
//     }
//     return a+b;
// }

function addTwo(a, b = 0) {
  return a + b;
}

const ans = addTwo(4, 8);
console.log(ans);

// rest parameters

// function myFunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is`, c);
// }

// myFunc(3,4,5,6,7,8,9);

function addAll(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total = total + number;
  }
  return total;
}

const ans = addAll(4, 5, 4, 2, 10);
console.log(ans);

// callback functions

function myFunc2(name) {
  console.log("inside my func 2");
  console.log(`your name is ${name}`);
}

function myFunc(callback) {
  console.log("hello there I am a func and I can..");
  callback("harshit");
}

myFunc(myFunc2);

// function returning function

function myFunc() {
  function hello() {
    return "hello world";
  }
  return hello;
}

const ans = myFunc();
console.log(ans());

// block scope vs function scope

// let and const are block scope
// var is function scope

// if(true){
//     var firstName = "harshit";
//     console.log(firstName);
// }

// console.log(firstName);

function myApp() {
  if (true) {
    var firstName = "harshit";
    console.log(firstName);
  }

  if (true) {
    console.log(firstName);
  }
  console.log(firstName);
}

myApp();

// lexical scope
const myVar = "value1";

function myApp() {
  function myFunc() {
    // const myVar = "value59";
    const myFunc2 = () => {
      console.log("inside myFunc", myVar);
    };
    myFunc2();
  }

  console.log(myVar);
  myFunc();
}

myApp();
