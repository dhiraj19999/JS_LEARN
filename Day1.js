
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
