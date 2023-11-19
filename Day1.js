
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




*/




