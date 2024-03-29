/* console.log('Hello World')
console.log('Labinot')

// variables
let name = 'Peter Pan'
console.log(name)

let sentence = 'how are you doing today, nice to see you, hope you have a great day!'
console.log(sentence)*/


// operators
// fruit = prompt('what is your favorite fruit?')
// console.log(fruit)

// * / ** + -

// food = Number(prompt('how much was the food?'))
// tipPercentage = Number(prompt('tip %?') / 100)
// tipAmount = food * tipPercentage
// total = food + tipAmount

// console.log('Tip Amount:', tipAmount)
// console.log('Total:', total)
// alert(tipAmount)

// user input

/* data types (strings, numbers)
numbers = 1, 5, 10, 100, 2.5
strings = 'hello', "what is up"
arrays = []
objects = {}
boolean = true / false (banks)
*/

/* Math Operators
Multiply *
Divide /
Exponents **
Modulo & Remainder % 5%2 = 1
Add +
Subtract -
*/

/*
Math Methods
Floor - Rounds down
Ceil - Rounds up
Random - gives you number between 0 and 1
*/

// Baby weather app (conditionals)
// if rain then 'Grab your umbrella emoji'
// else 'Wear your sunglasses emoji'
// let weather = prompt('What is the weather like?')
// if (weather == 'rainy') {
//   console.log('Grab your umberella ☂️')
// }
// else {
//   console.log('Wear your sunglasses 😎')
// }

// conditional operators
// ==, ===, >, <, <=, >=, !=, !==

// Functions
// this is a function called 'sayMyName'
// it has no arguments
// it logs out your name to the console
// function sayMyName() {
//   console.log('Labi')
// }

// sayMyName()
// this is a function called 'sayMyName2'
// it has 1 argument called 'name'
// it logs out your name to the console
// function sayMyName2(name) {
//   console.log(name)
// }

// sayMyName2('Sulejmani')
// this is a function with 1 argument 
// function greeting(name) {
//   greet = `Hi ${name}, nice to meet you!`
//   console.log(greet)
// }

// greeting("Labiiii")

 function sum(a, b) {
  // return
   return a + b
 }

// num1 = sum(1, 2)
// console.log(num1)

// function calculateFoodTotal(food, tip) {
//   const tipPercentage = tip / 100
//   const tipAmount = food * tipPercentage
//   const total = sum(food, tipAmount)
//   return total
// }

// console.log(calculateFoodTotal(300, 20))

// ES6
// Arrow Functions =>
// Arrow function with explicit return
const sumArrow = (a, b) => {
  return a + b
}

// arrow function with implicit return
// IMPORTANT: For implicit return, remove curly braces
const sumArrow2 = (a, b) => a + b 

// console.log(sumArrow2(1, 8))

// Arrays
const groceries = ['Banana', 'Apple', 'Orange', 'Pear']
console.log(groceries)

// grab the index defined in square braces
// console.log(groceries[2])

// Array methods
groceries.push('Cookie')
console.log(groceries)

groceries.push('Pite')
console.log(groceries)

// Array Slice
// start from 0 INCLUSIVE and UP to 2 [0, 2]
console.log(groceries.slice(0, 2))

// Array indexOf
console.log(groceries.indexOf('Pear'))

// Array length
console.log(groceries.length)
