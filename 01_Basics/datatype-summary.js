//call by value and call by reference

// primitive datatypes:
// 7 (String, Number, Boolean, null, undefined, Symbol(used to make any value unique), BigInt) //call by value

// JS Dynamically typed language: means we dont have to deifne type of any value.

//Reference types (Non-primitive types):
// Arrays, Objects, Enums, Functions


// const heros = ['Shaktiman', 'Naagraj', 'Doga'] //return type: object

// console.log(typeof heros);

// let myOj ={
//     name: 'hitesh',
//     age: 22,
// } //return type: object

// console.log(typeof myOj);

// const myFunction = function(){
//     console.log("Hello world");
// } //return type: function

// console.log(typeof myFunction);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Memory of 2 types:
// Stack (Primitive)
// Heap (Non-primitive)

// All the premitive data types are stored in stack memory which create a copy when you store same value in another variable.
// All the non primitive data types are stored in heap memory which create a reference to the same value for another variable.
// when you change the value coppies by stack, original value is not chaged.
// when you change the value coppied by heap, original value is changed.

let myName = "Name"


let anotherName = myName
anotherName = "New Name"

console.log(anotherName)
console.log(myName);

let user = {
    email: "user@example.com",
    upiID: "upiID",
    password: "123",
    age: 22,
    address: {
        city: "Pune",
        state: "Maharashtra",
    }
}

console.table(user)

