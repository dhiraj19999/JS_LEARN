 /*

 undefined means a variable has been declared but has not yet been assigned a value, whereas null is an 
 assignment value, meaning that a variable has been declared and given the value of null

 */
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
const x;
 x=10
console.log(x)///SyntaxError: Missing initializer in const declaration

function hello(){
    
    var i ="hello"
    
}
 // here var have function scope 



console.log(i) //ReferenceError: i is not defined


{
    
    var i ="hello"
    
}


// here var have global scope in curely braces

console.log(i) //hello

/*

var: Before the introduction of let and const, var was the primary way to declare variables in JavaScript. The scope of a var variable is either the function in which it is declared (function scope) or the global scope if it's declared outside any function.
var example:
function example() {
  if (true) {
    var x = 10;
    console.log(x); // Output: 10
  }
  console.log(x); // Output: 10
}

example();
In this example, the variable x is declared using var. It has a function scope, so it is accessible both inside and outside the if block. This behaviour is known as hoisting, where the variable declaration is moved to the top of the function. Therefore, even though x is declared inside the if block, it can still be accessed outside of it.
let: let was introduced in ECMAScript 6 (ES6) to address some of the issues with var. The scope of a let variable is limited to the block in which it is declared (block scope), which is typically denoted by a set of curly braces { }.
let example:
function example() {
  if (true) {
    let y = 20;
    console.log(y); // Output: 20
  }
  console.log(y); // ReferenceError: y is not defined
}

example();
In this example, the variable y is declared using let. It has block scope, which means it is only accessible within the block it's declared in (inside the if block). When we try to access y outside of the block, we get a ReferenceError because y is not defined in that scope. This behaviour helps prevent unintended variable leakage and makes the code easier to understand.
const: const is also introduced in ES6 and stands for "constant." Variables declared with const are block-scoped, just like let, but they have an additional characteristic, their value cannot be reassigned once it has been assigned. In other words, const variables are immutable.
const example:
function example() {
  const z = 30;
  console.log(z); // Output: 30

  z = 40; // TypeError: Assignment to constant variable
}

example();
In this example, the variable z is declared using const. It is also block-scoped like let. However, the difference is that const variables cannot be reassigned once they are assigned a value. In the example, when we try to assign a new value to z, we get a TypeError because we are trying to modify a constant variable. This behaviour ensures that the value of z remains constant throughout the code, promoting immutability and preventing accidental changes.
To summarize:
Use var if you want function-scoped variables that can be hoisted.
Use let if you want block-scoped variables that can be reassigned.
Use const if you want block-scoped variables that are constant and cannot be reassigned.
By using let and const, you can write more predictable, readable, and maintainable code while avoiding common pitfalls associated with var.
hashtag#javascript hashtag#let hashtag#var hashtag#const hashtag#webdevelopment hashtag#frontend hashtag#javascriptdeveloper hashtag#javascriptlearning hashtag#programming hashtag#coding hashtag#react 








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


console.log(this);
console.log(window);
console.log(firsname);
var  firsname="dhiraj"
console.log(firsname);
/*
at first code get complied and then excute

during compilation synetx error get checked
and determine the scope of varibles
  
information about  firsname varible avallible in global scope as it did not decalred in function

in js code excutes inside excution context and the first excution contest is global
excution context
then global excution context get add in stack.
global excution has two phases
first is creation phase
second is code excution phase
when globel excution context get created in creation phase then there is creation of varible for example
firsname varible get created with undefined value as it declare with var keyword
in creatin phase the value of this keyword get set with  value windows ..(this:window)
window is global object here which is already presented and provided by browser

now come to excution phase

at first it prints window object as this sets its value to window
then window obj get printed
now at 3rd line it prints undefined as firstname set value with undefined in creation phase
now in 4th line firsname value get set with dhiraj .
at 5th line dhiraj get printed

and after all code get excuted then global excution context get poped from stack
*/

/*
what happens when decleare function
*/

console.log(this);
console.log(window);
console.log(myFunction);
myFunction()
console.log(FullName);

function myFunction(){
    console.log("hello");
}

var firsname="dhiraj"
var lastname="garad"
var FullName=firsname+lastname

/*
information about firstname,lastname and Fullname varibles and function myfunction are availbel 
in global scope
 code get compiled for syntex error checking
during global excutin context creation  this keyword with window
then firstname,lastname,fullname and myfunction get created .

varibles get created with undefined value

then excution phase at line no 832 it prints just total function not value for examplee
it prints function but not the console.log() value

and after all code get excuted then global excution context get poped from stack

*/


console.log(myfun);

var myfun=function(){

    console.log("fun");
}

console.log(myfun);
/*

myfun availble in global scope
global exction creation get created and with this myfun is get created with undefined value
as it declre with var keyword

during excution phase line no 861 prints undefined
at line no 863 myfun value get changed to function
line no 868 prints function

if we declare myfun with let keword then the line no 861 prints cannot accses myfun before intialisation
*/

// let and const

console.log(fruit);

let fruit="mango"
console.log(fruit);

/*
during global excution creation fruit get created with unintilised 

during excution phase lone no 884 prints cannot accses fruit before intialisation
line no 886 it intialize the value




*/

console.log(app);// it prints app is not defined becuse we not define any app varible

let zomb;
log(zomb) // it prints undefined

const kpm;
console.log(kpm); // syntex error missing intiliazer in const declration

/*

In simple term hoisting means varibles or function with let const or var keypword are availble
are get add in memory or availble in memory before excution 
but we can't accses the value of let and const before intilzation becuse at first it is in
unintilised when we try to accses it before intilization

*/

/*

Temporl dead zone=>  when our varibles value is unintilised and then change to some value
till the time when varible is unintilised  that time we can call it temporal dead zone
once we give it value then it comes out from temporal dead zone

*/


let firstname="dhiraj"
let lastname="garad"

function wefun (fir,sec) {
    
    let var1="first"
 

    console.log(var1)
    const fullname=fir+sec
    return fullname
    
}

const personname= wefun("suraj","garad")
console.log(personname);
/*

at first  firstname lastname and wefunction in global scope

during creation phase firstname and lastname and personname value will be unintialised
then  wefun get created with function as a value
then come to excution phase
firstname and lastname get set with real value
now inside global excution context function excution context get created
then inside function excution context there are local memory creation and code excution
inside local memory creation  suraj value get set to fir and garad value set to sec
then  var1 get set with unintilised and fullname also get value unintilised
at line no 940 function excution context get created and get push to stack

now come to code excute var 1 set with first and get printed
then fullname get set with fir and sec 
then it return fullname 
and then personame set its value with surajgarad
then stack pops the function excution context
then personname get printed

*/


const lasnam="garad"

const printname=function () {
   const fn="dhiraj"
   console.log(fn);
    console.log(lasnam);
}
printname()
/*

in global excution context during memory creation phase lastname and printname set with unintilised

and global excution context get push to stack
now come to excution phase  printname value changed to function
then line no 971 creates function excution context get created and push to the stack
in local memory creation fn get set with undefined
now in code excution  fn get set with dhiraj
then it print fn
now in  line no 971  local memory dosent have lasname varible  so now function excution context goes
to his parent that is global excution context and get lasnam value and print it
so bascially it is lexical envoirment
*/


/*

CLOSURES



if function is returned by another function then that function is retruned with parent function local
memory varibls


*/

function print(first,last){

    function full(){
        console.log(first,last);
    }
    return full
}

const ans= print("dhiraj","garad")

ans()

/*
here full function returned by print function so full function retunred with print functions local memory
variebles becuse once print function get excuted then pop from the stack then so first and last varible
not availble in parents excution context and full fuction excution context as well so thats why full
function returned with  parent function local
memory varibls or in short inner function returned with outer function scope  that is closures
*/

/*

DOM 

broser see the code of html then brwoser creates the object and that object is document then
broser  adds document obj in javascript's window object
all the  events and elements availbel in documents obj

actually browser creats seprate obj for each element and store in document obj

*/

// select element using id

document.getElementById("main")
console.dir(document.getElementById("main")); // it return obj of that particular element

//  query selctor

document.querySelector("#main")

/*
suppose if we have multiple element with same class then querySelector just select the first element
with same class name but if want to select all elemnts with same class then we should use
 querySelectorAll 

*/
document.querySelectorAll(".hello")

const mini=document.querySelector("mina.head h2")

mini.style.color="blue"

// get and set attributes

const link= document.querySelector("a")
console.log(link.getAttribute());// it prints the attribute of particular element
link.setAttribute("href","https:we.com")//  sets the attribuyte
link.href="gjyh"


/// get multiple elements using getelemnts by class
// get multiple elemnts items uding querySelectorAll

const navItems= document.getElementsByClassName("nav-item")// it return html collections
/*
it return array like obj

*/
console.log(navItems[0]);

const navitem=document.querySelectorAll("nav-item")// it retuns node lists

console.log(navitem[0])


/*
we can't use forEach method to itreate through HTMLCollections
we can use forEach method in node lists



*/
// we can change inner html means change the elements
navitem.innerHTML="<h1>inner html get changed</>"


/*

document tree model

*/

/*
<html>

    <head>
        <title>dom travlesing</title>
        <script></script>
    </head>
    <body>
        <div>
            <h1>my headings</h1>
            <p>some useful information</p>
        </div>
    </body>
</html>

*/

// depend on above code

const rootnode=document.getRootNode()// it returns document object

console.log(rootnode.childNodes);// it return nodelist with html tag beuse html is a child node of document

const htmlElementNode=rootnode.childNodes[0]// it prints all the html like head, title,

console.log(htmlElementNode.childNodes);// it prints nodelist of head,text,body that is child node of
                                       
const headElementNode=htmlElementNode.childNodes[0]// return head element

console.log(headElementNode.parentNode);//returns Html  that is paraent node of head

// sibling realtion
console.log(headElementNode.nextSibling);// it returns text node
console.log(headElementNode.nextSibling.nextSibling); // retusn body element






//

const div= document.querySelector(".div")

div.classList.add("bg-ar")
div.classList.remove("bg-ar")

// events


const btn=document.querySelector(".btn")

btn.addEventListener("click",function(){

    console.log(this); // it prints the butten object
})

btn.addEventListener("click",()=>{

    console.log(this); // it prints window object  becuse arrow function go one level up
})


//  Event object

/*

const but= document.querySelector("#one")


but.addEventListner("click",function(event){

    console.log(event)
})

// jub bhi kisi element pe event listner add hoga 
js enegine line by line code excute krta hai 
browser== js engine+extra features
browser== js enegine+webapi
jub browser ko pata chala ki user ne event perform kia 

then browser do 2 things 
first one is callback fun hai vo js engine ko degi
second one is callback function ke sath browser jo event hua hai uski info bhi dega 
ye info hume ek obj ke form mai milegi  
*/

// event bubbling / event propagation
//event capturing
// event delegation


/*


<main>

<div class="grandparent">
grandparent
<div class="parent">     parent  
<div class="child"> child   </div>
</div>
</div>

</main>


*/

const grand=document.querySelector(".grandparent")
const parent=document.querySelector(".parent")
const child=document.querySelector(".child")


child.addEventListener("click",()=>{

    console.log("children");
})

parent.addEventListener("click",()=>{

    console.log("parent ");
})

grand.addEventListener("click",()=>{

    console.log("grandparent");
})

// if we click on child event then if their parents have events then that events also get calles 
// automatically  that is event bubling or propagation


// capturing event 

/*
suppose if we clickon child then browser first check that  outermost parent have capturing event 
or not in this examle it cheks for  grandparent 
afeter that it checks for parent and last it cheks for child
at first it prints grandparent thrn parent and then children

*/

child.addEventListener("click",()=>{

    console.log("children");
},true)

parent.addEventListener("click",()=>{

    console.log("parent ");
},true)

grand.addEventListener("click",()=>{

    console.log("grandparent");
},true)


// event delegation
/*
here if we click on child or parent it prints grandparanet as we did'nt set any event for child or
parent

*/

grand.addEventListener("click",()=>{

    console.log("grandparent");
},true)



// now ,

grand.addEventListener("click",(e)=>{

    console.log(e.target.textContent) // here if we click on child then we get childs content
    // if we click parent then we get parent content and if we click grand we get parent content
    // by using event delegation we don't need to set seprate events for each elemnt

},true)


// synchronus vs asynchronus programing

console.log("start"); //

const id=setTimeout(() => {
    console.log("inside");
}, 0);

// browser takes setTimeout 

console.log("end");

// at first console.log("start") get excuted in callstack then broser pushed callback of  setTimeout to  the
// callback que event loop continsly checking for callback que and if once callstack is empty 
// then event loop pop  setTimeout callback from callback que and push it to callstack then js excute it and pop
// it from callstack
// start >> end >> inside


//
clearTimeout(id) // it prevents setTimepout from calling means it dosen't run setTimeout it get
//  removed from callback que

//setTinterval

console.log("start"); //
setInterval(() => {
    console.log("interval");
}, 1000);

console.log("end");


// setinterval contnusly excute console.log("interval") after every one second
//  start >> end >> interval


//  Callback function 

/*

the function which is called by another function or the function which pass as argument inside another
function that function is called as callback function
*/


function getnumbersAndadd(num1,num2,callback){

    

    if (typeof num1==="number" && typeof num2==="number") {
        callback(num1,num2)
    } else {
        console.log("data type must be numbers");
    
    }

}

function addTwonum(num1,num2) {
    
    console.log(num1+num2);
}

getnumbersAndadd(4,5,addTwonum)


// callbacks, callback hell , pyramid of doom , asynchronus programing

/*

we use callbacks for to excute second function if some conditions get passed by first function

*/

let a=5;
let b=6;

setTimeout(() => {
    a=9

    setTimeout(() => {
        b=9
    }, 1000);
}, 1000);

/*
here it first after one second change a value to 9 and then b value to 9 
 here it is like callback  once a=9 tex place then b=9 tex place
*/


// callback hell
/*
 here there are callback func inside another callback fun in continous mannner so that is callback
 hell  its like nested callbacks  it makes reading code very complex
*/ 

let c=9;
let d=8;
let e=7;
let f=10;


setTimeout(() => {
    c=9

    setTimeout(() => {
        d=9
 
        setTimeout(() => {
            e=9

            setTimeout(() => {
                f=9
            }, 1000);

        }, 1000);
 }, 1000);
}, 1000);




//  promises

// promise is an object which is use to handle asynnchronus operations

console.log("start");

const bucket=["chips","salt","rice"]

const myPromise = new Promise((resolve,reject)=>{

   if(bucket[0]=="chips"){

    resolve("value is correct");

   }else{
    reject("value is not correct")
   }


});


myPromise.then((res)=>{ // first priority

  console.log(res);  // it prints value is correct
}).catch((err)=>{

    console.log(err);// if value is not matching it prints value is not correct
}).finally(()=>{
// whatever promise returns at the end finally method get called
    console.log("proise operation complete");
})


setTimeout(()=>{ // second priroty
console.log("hello");
},0)


console.log("end");


/*
promise object get add to javascript memory
browser do the task of consuming the promise , if suppose promise get resolved 
then method  get add to microtask queue then 
microstack has more priority than callback que 
suppose if we take setTimeout  then browser push setTimeout callback to callback  que
 but things from the  microstack gets priority means promise get excuted first and then setTimeout

once global excutin context excutes the consloe.log start and end code after that event loop pop
then method from microtask and add it to the call stack for excution



start >> end >> value is correct >> hello


*/




//  function returning promise



function returnpromise() {
    
    const bucket=["chips","salt","rice"]


return new Promise((resolve,reject)=>{

    if(bucket[0]=="chips"){
 
     resolve("value is correct");
 
    }else{
     reject("value is not correct")
    }
 
 
 });
 
 

}


returnpromise().then((res)=>{ // first priority

    console.log(res);  // it prints value is correct
  }).catch((err)=>{
  
      console.log(err);// if value is not matching it prints value is not correct
  }).finally(()=>{
  // whatever promise returns at the end finally method get called
      console.log("proise operation complete");
  })
  

  // then method always returns promise

 function  myf(){

    return new Promise((resolve,reject)=>{

        resolve("foo")
    })
  }


  myf().then((res)=>{

    console.log(res); // prints foo
    res="too"
    return res;// here then returns promise
  }).then((val)=>{

    console.log(val);// prints too
  })

  // it is promise chaning


  // fetch
  // fetch returns promise 
// json.stringify converts data to JSON
  const url="https:dhiraj/garad/posts"

  fetch(url).then((res)=>{
if(res.ok){
    return res.json() //  json is method which is come with response it also returns promise

}else{
    throw new Error("Something went wrong")
}
    
  }).then((data)=>{
    console.log(data);
  }).catch((err)=>{

    console.log(err);
  })


  // async await 

  async function getPosts(){ // this fun return promise

  const res=  await fetch(url)
if(res.ok){
    const data= await res.json()

    return data;
  
}else{
    throw new Error("Something went wrong")

}
 
  }

  getPosts().then((data)=>{
    console.log(data);
  }).catch((err)=>{
    console.log(err);
  })

  