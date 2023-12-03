
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


// Maps
/*maps are iteriable 
store data in orderd fashion 
store key value pair
duplicate keys are not allowed like objects
obj can only have string or symbol as key
in maps you can use anything as a key like array,number,string

*/

const person=new Map();

person.set("firstname","dhiraj")
person.set("lastname","garad")

console.log(person.get('firstname'));

for(let key of person.keys()){
    console.log(key);
}

for(let [key,value] of person){
console.log(Array.isArray(key)) // it returns true
    

    console.log(key,value);
}

// optional chaining

let user={
    name:"gghgh",
    addre:{hn:'123'}
}

console.log(user?.addre?.hn);// addre key available then it givs value else give undefined 
// it use for avoid errors 


/*
METHODS means function inside object

*/

const abc={
fs:"dhiraj",
about:function() {
  console.log(this.fs);  // this keyword points towards object
}
}

console.log(abc.about());

function userInfo(){
    console.log(this.fs);
}

const abc2={
    fs:"suraj",
   about:userInfo
    }

        
    abc2.about()// it prints suraj becuse about is called by abc2 obj so this points towards abc2   
    

    function nam() {
       // "use strict"  if we use use strict then it doesnt print window obj it prints undefined
        console.log(this);// prints window object
    }
    nam()



const student={
    name:"dhiraj",
    age:23,
    fun:function() {
        console.log(this.name);
    },
    arrow:()=>{
        console.log(this.age);
    }

}

student.fun()// it prints dhiraj
student.arrow()// it prints undefined becuase arrow function take this as a window object
student.arrow.call(student)// it prints undefined becuase arrow function take this as a window object
const nor=student.fun
nor()// it prints undefined becuse it take as a window object

const right=student.fun.bind(student)
right()// it prints dhiraj

//
const obj1={
    key1:"value1",
    key2:"value2"
}

const obj2=Object.create(obj1)// it returns {}, it sets obj1 as a ___proto of obj2

obj2.key3="value3"
console.log(obj2.key1);// it prints value1 as it first find value in obj2 and then in proto


//


const userMethod={
    about:function () {
      return(this.firstName)  
    },
    sing:function () {
        return("qgq")  
      },
      
}

function createUser(firstName,lastname) {
    const user=Object.create(userMethod)
    user.firstName=firstName,
   user.lastname=lastname
   //if we use Object.create here then we didn't need to write key everytime here just we have to
   // create keys in userMethod
  //user.about=userMethod.about,
  //user.sing=userMethod.sing
   return user
}


const user1=createUser("dhiraj","garad")


/*

javascript functions= functions + object

we can add our own property


only function provides prototype property

we can add property in prototype
*/

function hello(){
    console.log("hello");
}

hello.myOwnproperty="unique value"

hello.prototype.sec="second hello"

console.log(hello.prototype.sec);


/*
proto is refernce and protoypte is object

*/


function create(firstName,lastname) {
    const user=Object.create(create.prototype) // here user sets all prototypes proptis of create
    user.firstName=firstName,
   user.lastname=lastname
   //if we use Object.create here then we didn't need to write key everytime here just we have to
   // create keys in userMethod
  //user.about=userMethod.about,
  //user.sing=userMethod.sing
   return user
}

create.prototype.about=function () {
    return(this.firstName)  
  },
  
  create.prototype.sing=function () {
      return("qgq")  
    }

const use1=create("dhiraj","garad")
console.log(use1.sing());



/*

new keyword
create empty object
  return this

*/


function createUser(name,age) {
    this.firstName=name,
    this.age=age

}

createUser.prototype.about=function() {
  console.log(this.firstName,this.age);  
}
const userinfo1= new createUser("dhiraj",24)

userinfo1.about()// it prints the value








// constructor function
function Create(firstName,lastname) {
    //here  we not need to set proto
    this.firstName=firstName,
   this.lastname=lastname
  
}

Create.prototype.about=function () {
    return(this.firstName)  
  },
  
  Create.prototype.sing=function () {
      return("qgq")  
    }

const userin1= new Create("dhiraj","garad")
console.log(userin1.sing());


for (let key in userinfo1){

    if(userinfo1.hasOwnProperty(key)){
        console.log(key); // it does not print protoypt obj key it only prints userinfo1 key
    }
}




/*

ARRAY methods comes from prototype but in js only function have protoypts so internally
js creates the ARRay by using function so thats why array have methods from protoypes


*/




class CreateUser{

    constructor(firstName,lastname){

        this.firstName=firstName,
        this.lastname=lastname
    }

    about(){
        console.log(this.firstName);
    }
}

const userinf1= new Create("dhiraj","garad")
console.log(userinf1.about());


// class with extend keyword


class  Animal{

    constructor(name,age){
        this.name=name;
        this.age=age
    }

    eat(){
        `${this.name}is eating`
    }
}

const animal1=new Animal("tuffy",2)



class Dog extends Animal{ // now Dog class can access all the properties of Animal class
    

}

const animal2=new Dog("jimmy",4)


console.log(animal2.name); // it prints jimmy




class Cat extends Animal{ // now Dog class can access all the properties of Animal class
    
   
        constructor(name,age,speed){
    super(name,age)
            this.speed=speed
            }
   
    run(){
        return(this.name)
    }
    eat(){// here eat function is also availble in Animal class that is base class
        // so what to print becuse both Cat and Animal have same functions so
        // js first check that is eat availble in Cat class  if availble then it prints and if
        // not availble then it checks to base class that is Animal class
        `modified eat${this.name}is eating`
    }
    
}
    
    const cat1=new Cat("phunky",4,45)
    console.log(cat1.eat());// prints modified eat phunky is eating
    console.log(animal2.name); // it prints phunky
    

    // geters and seters

    class Dhiraj{
        constructor(name,lastname){

            this.name=name,
            this.lastname=lastname
        }

      static classinfo(){
        console.log("info is here");
      }
      // if we create method using static then we can't call that method on object
      // we have to call that method on class .

      static des="static property" // this is static priperty
     
        get fullName(){
           return `${this.name,this.lastname}` 
        }

        set fullName(fullName){
const[name,lastname]=fullName.split(" ")
this.name=name,
this.lastname=lastname
        }
    }

    const dhiraj1= new Dhiraj("Dhiraj","Garad")
    console.log(dhiraj1.fullName);  // here we don't need to invoke fullName method as a fullName()
    // becuse get method sends output with dhiraj1.fullName syntex

    dhiraj1.fullName="Suraj Garad"// with this syntex set method modified the name and lastname to
    // suraj garad respectively



    // static methods and properties

   Dhiraj.classinfo()// it prints "info is here"

Dhiraj.des


/*

How js works

*/



var  firsname="dhiraj"

/*
at first code get complied and then excute

during compilation synetx error get checked
and determine the scope of varibles
  
firsname varible avallible in global scope as it did not decalred in function

in js code excutes inside excution context and the first excution contest is global
excution context

*/