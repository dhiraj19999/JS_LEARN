
"use strict"

// by using use strict we shuld add var,let or const before varible declreation because with use strict
/*
we can't define varible without keywords but without using use strict we can 
for exaample;
without using use strict
 name="Dhiraj"
dosn't give any error

 "use strict"
 name="dhiraj"
 it givs refrence error
 so we have to use 
 let or const or var
 let name="dhiraj"
*/

/*

 // LET KEYWORD //

let name="suraj"
let name ="abc"
gives error that name alredy decleraed


// CONST KEYORD//

const name="dhiraj"
name="suraj"
gives error that assignment to constatnt varibles
we can't change the value in const.
*/




//  STRING METHODS

let nam="  dhiraj  "

nam.trim()  // it removes the space but length of the varible remains same it return new varible

nam.toUpperCase()// retrun new string and convert all letters to uppercase

let str="suraj"
str.slice(0,3)  // it gives "sur"  as a output slice takes first and last index as a parameter but it avoids
                     /// last index it takes start index  to last index-1 


                     /*

let num= 123   =>> number
   num=123+""  ==> now number get converted to string

   let age= +"23"   == > number
   
let str1="12"
let str2="12"
console.log(str1 + str2)  it gives 1212
console.log(+str1+ +str2)// it gives 24
                     */



/*

let sig;
console.log(sig) // gives undefined
const fir;
console.log(fir)// gives syntex error missing initializer in const declrations


console.log(typeof(null))  // it gives object 
type of null is object and its an error in js
*/

/*
let num1=123n
let num2=124
console.log(num1+num2) // it gives error that type error cannot mix bigint and other types
let num3=BigInt(123)
let num4=12n
console.log(num3+num4)  => 135n


let abc=22
let avk="22"

console.log(abc==avk)// return true
double equals check only value not data types
console.log(abc===avk) //  retrun false
triples equals checks strictly value as well as datatype
*/
/*

let bcd=7
let ckd="7"


console.log(bcd !=ckd) retrun false becuse valuse is equal
console.log(bcd!==ckd) return true now it cheks datatype also

*/

/*
 
TERNARY OPERATOR

let age=16
let drink= age>=5?"coffe":"milk"




SWITCH STATAMENTS

*/

let day=0;

switch (day) {
    case 0:
       
       console.log("Sunday");
        break;
        case 1:
            console.log("Monday");
break;
    default:
        console.log("Invalid day");
}

// while loop

let j=0;

while(j<=3){
    console.log(j);
    j++;
}


// array
let arr=["bag","car"]

console.log(typeof(arr)); // gives object
Array.isArray(arr)// gives true

arr.unshift("shooes")// add at the starting
arr.shift()// remove item from start of the array.
let removeditem=arr.shift()// it retuns removed item


//  PRIMITIVE VS REFERENCE DATA TYPES

let numb=1;
let num2=numb

numb++

console.log(numb); // prints 2;
console.log(num2); // prints 1 becuse we didn't change num2 value

let arr1=["item1","item2"]

let arr2=arr1
arr1.push("item3")

console.log(arr1)// prints["item1","item2","item3"]
console.log(arr2)// prints["item1","item2","item3"]
/*

primitives directly stores the value like differnt varible takes differnt space in memeory
thats why there is no direct change in varibles in case of primitive we have to seprtlye
change the values of each varibles
but in case of refernce type for example arr does not store value it just store the 
memory address or refrnce for that value so when we make change in arr1 then there is change 
in value and arr2 also have the same memory addres which arr1 have so the value of arr2 get 
changed becuse both arrs refred to the same memory location




Clone array



*/
let arrs1=["mao","chao"]

//let arrs2=arrs1.slice(0)
// let arrs2=[].concat(arrs1)
// spread oprator
//
let arrs2=[...arrs1]

// but in cloning if we change arrs1 value then there is no change takes place in arrs2 as both
// are differnt arrays
/*
if we want to add extra items in arrs2
let arrs2=arrs1.slice(0).concat(["kao","bao"])
*/

const na=["name","maps"]

na.push("change")

// it prints    ["name","maps","change"]
// becuse we here try to add value not to change its address


// na=["grapes"]  // here gives error becuse here we try to reassign the value change arr completely


let acc=["a","b","c"]

for(let accesories of acc){
    
    console.log(accesories); // it printes all items
}

for(let accesories in acc){
    
    console.log(acc[accesories]); // it printes all items
}


// obj//
const key="email"
let person={

    name:"dhiraj",
    age:24,
    "person hobby":["play","sing"]
}

console.log(person["person hobby"][0]);

person[key]="dhirajagarad50" 


let hobby={

    first:"Cricket",
    second:"guitor"
}

for(let key in hobby){

    console.log(hobby[key]);
}

// Computed properties
const key1="objkey1"

const key2="objkey2"

const value1="value1"
const value2="value2"

const obj={}
obj[key1]=value1

// Spread Oprator

const ar1=[1,2,3]
const ar2=[4,5,6]

const newarry=[...ar1,...ar2]
const spre=[..."abcd"] // it spreds "a","b","c","d"

// Nested destructring

const users=[
    {userId:1,firstName:"hasrhit",gender:"male"},
    {userId:2,firstName:"sujit",gender:"male"},
    {userId:3,firstName:"rajat",gender:"male"}
]

const [{firstname:user1firstname,userId},,{gender:user3gender}]=users

console.log(user1firstname)//prints harshit 
console.log(userId);// prints 1
console.log(user3gender);// prints userid3's gender



// blcok scope vs function scope

{
    let car="mahnidra"
}
console.log(car); // prints car not defined as let  and const are block scope
{
    var  car="mahnidra"
}
console.log(car); // prints mahindra as var is an function scope

//  array methods

const numbers=[4,2,5,6]

numbers.forEach((number,ind)=>{
    console.log(number,ind);
})

numbers.map((el,ind)=>{

    return el*2
    // returns new array [8,4,10,12]
})

// filter

numbers.filter((el)=>{

    return el%2===0
    // returns new  array [4,2,6]
})

// reduce

numbers.reduce((accumultor,cuurentValue)=>{

    return  accumultor+cuurentValue
    // returns sinngle number 17
})

// sort 
const newnum=[2,6,5,9,8,]

newnum.sort((a,b)=>{
    return a-b;// ascending
    // if a-b is positive =9-8=1 greatr than 0 then b come to first place then a if it negative then first is a then b
    // it return modified array=[2,5,6,8,9]
})

// find method

const myArray=["Hello","cat","dog"]

myArray.find((el)=>{

    return el=="Hello"
})


// Every method
newnum.every((num)=>{

  return  num%2===0
  // it rertun true or false
})

// splice

const itemarry=["item1","item2","item3"]
// start , delete, insert
//itemarry.splice(1,1)
// return change original array=["item1,item3"]

itemarry.splice(1,0,"insert")

// it change original array to ["item1","insert",item2","item3"]


// itrables means jispe hum for of loop laga skenin
// obj itrable nahi hote array and string itrble hote hai
// array like obj means jinke pass length proeprty hoti hai aur jisko hum index se accsess
// kr skte hai example= string

//  SETS
/*
stes are itrable , store data, set also have its own data, no index based accsess
order is not guaranteed
unique item only (no duplicates aalowed)

*/

const digit=new Set([1,2,3]) // duplicate not allowed
digit.add(4)
digit.add(4)
// it dose not add 4 again becuses it makes duplicasy
digit.add([1,2])
digit.add([1,2])
// both get added Set(6) {1,2,3,4,Array(2),Array(2)} beuse both array has differnt memory address so no 
// duplicasy

if (digit.has(1)){
    console.log("yes");
}

for(let number of digit){
    console.log(number);


}

const diff=[1,2,3,3,3,4,4,5,6]
const uniqueElemnts=new Set(diff)

console.log(uniqueElemnts)// [1,2,3,4,5,6];
