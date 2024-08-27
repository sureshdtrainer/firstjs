//alert('Hello World External!');

/* 
multi line comments
*/

// console.log('Hello World');
// console.error('Error');
// console.warn('Warn');

//Variable Declarations

//var, let and const

// let x = 5; // Declaring a variable using let
// const pi = 3.14; // Declaring a constant variable
// var name = "John"; // Declaring a variable using var (older way, not recommended in modern JavaScript)
// console.log(x); // Output: 5
// console.log(pi); // Output: 3.14
// console.log(name); // Output: John

// let firstName = "Muralitharan"; //String
// let userAge = 30; //Number
// let isLoggedIn = true; //Boolean
// let favoriteFruits = ["apple", "banana", "orange"];  //Array
// let personInfo = { name: "Muralitharan", age: 30 }; //Object
// const PI = 3.14; //number
// const MAX_VALUE = 100; //number
// const y=null;
// const z=undefined;
// let a;
// console.log("First Name:", typeof firstName);
// console.log("User Age:", typeof userAge);
// console.log("Is Logged In:", typeof isLoggedIn);
// console.log("Favorite Fruits:", typeof favoriteFruits);
// console.log("Person Info:", typeof personInfo);
// console.log("PI Value:",typeof PI);
// console.log("y Value:",typeof y);
// console.log("z Value:",typeof z);
// console.log("a:",typeof a);

//Variable Scope

// let globalVariable = "I'm global";

// function myFunction() {
//    let localVariable = "I'm local";
//    console.log(globalVariable); // Accessing global variable
//    console.log(localVariable); // Accessing local variable
// }

// myFunction();

// console.log(localVariable);

//Variable Reassignment
// let number = 10;
// console.log(number); // Output: 10
// number = 20;
// console.log(number); // Output: 20


//Concatenation

// let name='John';
// let age=30;

// console.log('My name is ' + name + 'and I am ' +age); //old way before ES5

// let helloMessage = `My name is ${name} and I am ${age}`;
// console.log(helloMessage);

// helloMessage='Hello World';

// console.log(helloMessage.length);
// console.log(helloMessage.toUpperCase());
// console.log(helloMessage.substring(0,5).toLocaleLowerCase());
// console.log(helloMessage.split(' '));

//Arrays

// const numbers= new Array(1,2,3,4,5,6);
// console.log(numbers);

// const fruits =['mangos','apples','grapes','oranges'];
// console.log(fruits);
// console.log(fruits[1]);

// //fruits[4]='pears';
// fruits.push('kiwi'); //add it at the last of array

// fruits.unshift('bananas'); //adds value to the front
// fruits.pop();
// console.log(fruits);

// console.log(Array.isArray('hello'));

// console.log(Array.isArray(fruits));

// console.log(fruits.indexOf('grapes'));

// //Objects
// const person= {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music','sports'],
//     address:{
//         street: '12 main st',
//         city: 'Bangalore',
//         state: 'KA'
//     }
// }
// console.log(person.firstName);
// console.log(person.firstName,person.lastName);
// console.log(person.hobbies[1]);
// console.log(person.address.city);

// person.email='john@email.com';
// console.log(person);

//Array of Objects

const todos = [
    {
        id: 1,
        text: 'Learn SDLC',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Learn HTML&CSS',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Learn JS',
        isCompleted: false
    }
];

console.log(todos[2].text);
const todoJSON=JSON.stringify(todos);
console.log(todoJSON);
