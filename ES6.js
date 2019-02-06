// let and var- let allows us to use block scoping in JS, 
//thanks to let youare sure that variable you use inside 
//the block stays in that block and isn't accesible outside of it
//varchanged to let for backward compability reasons
/*let age = 30;
if (true) {
    let age = 27;
}
console.log(age);*/

//const - we cannot change it later on
//const holds a pointer to the values/ array in memory
//however we can change the value in background(by using push)
//you cannot change the constant itself 
//only the pointer that is pointing the value

/*const age = [24, 25, 26];
console.log(age);
age.push(28);
console.log(age);*/

//hoisting-for instance set age to 27 and declare it after
//it doesn't work with let,only ith var and const
//with let you need to declare things before using them

/*function doSmth(){
    age = 27;
}
let age;
doSmth();
console.log(age);*/

//functions - new syntax
//ES5
/*function fn() {
    console.log('Hello');
}
fn();
//ES6
var fn = () => 'Hello';
console.log(fn());*/

//ES5
/*var fn = () => {
    let a = 2;
    let b = 3;
    return a + b;
}
console.log(fn(3, 8));
//ES6
var fn = (a, b) => a + b;
console.log(fn(3, 8));
//with 1 argument, even if yo add second numberit will be ignored
var fn = (a) => a;
console.log(fn(3, 8));*/

//callback function
//setTimeout(() => console.log('Hello'), 1500);

//This
//ES
/*function fn() {
    console.log(this);
}
fn();
//ES
var fn = () => console.log(this);
fn2();*/

//refer to window object

/*var button = document.querySelector('button');
var fn2 = () => console.log(this);
button.addEventListener('click', fn2);*/


/* destructuring array*/
/*let number = [1,2,3];
let [a,b] = number;*/
/*What if
let [a,b,c,d] = number; - we get undefined*/
/*console.log(a);
console.log(b);
console.log(number);*/

/*Retrieve part of array*/
/*let number = [1,2,3];
let [a, ...b] = number;
console.log(b);*/
/*let number = [1,2,"3"];
let [a,...b] = number;
console.log(b);*/

/*deconstruct the element, swip values*/
/*let a = 5;
let b = 10;
[b,a] = [a,b];
console.log(b);*/
/*go back with destructuring, you can skip value in arrays*/
/*let number = [1,2,3];
let [a, ,c] = number;
console.log(a,c);*/

/*objects - youcannot justskip the values in objects
let obj = {
    name: "Adrian",
    age: 27,
};
let {name,age} = obj;
console.log(name,age);- if yo umiss greet here it will not work
greet();