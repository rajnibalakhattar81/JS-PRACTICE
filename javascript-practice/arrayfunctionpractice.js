
function greet(name) {
  return "Hello, How are you " + name + "!";
}

//console.log(greet("John"));  // Output: Hello, John!
//console.log(typeof greet);  // Output: function

//Primitive and Non-Primitive Types
//Example of immutability (primitive):
let x = 10;
let y = x;
y = 20;
//console.log(x);  // Output: 10 (x is unchanged)

//Example of mutability (non-primitive):
//example 1 of push()
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
arr2.push(5);
//console.log(arr1);  // Output: [1, 2, 3, 4, 5] (arr1 is changed because both arr1 and arr2 refer to the same array)

//example 2 of push()
let fruits1 = ["apple", "banana"];
fruits1.push("orange");  
console.log(fruits1);  // Output: ["apple", "banana", "orange"]

//example of pop()
let fruits2 = ["apple", "banana", "orange"];
let removedFruit = fruits2.pop();  
console.log(removedFruit);  // Output: "orange"
console.log(fruits2);  // Output: ["apple", "banana"]

//Example of shift()

let fruits3 = ["apple", "banana", "orange"];
let firstFruit = fruits3.shift();  
console.log(firstFruit);  // Output: "apple"
console.log(fruits3);  // Output: ["banana", "orange"]

//example of unshift()
let fruits4 = ["banana", "orange"];
fruits4.unshift("apple");  
console.log(fruits4);  // Output: ["apple", "banana", "orange"]

//example of splice
let fruits5 = ["apple", "banana", "orange"];
// Removes 1 element at index 1, and inserts "kiwi" at index 1
fruits5.splice(1, 1, "kiwi");  
console.log(fruits5);  // Output: ["apple", "kiwi", "orange"]

//example of slice
let fruits6 = ["apple", "banana", "orange", "kiwi"];
let citrus = fruits6.slice(1, 3);  
console.log(citrus);  // Output: ["banana", "orange"]

//example of concat
let fruits7 = ["apple", "banana"];
let moreFruits = ["orange", "kiwi"];
let allFruits = fruits7.concat(moreFruits);  
console.log(allFruits);  // Output: ["apple", "banana", "orange", "kiwi"]

//example of indexOf()

let fruits8 = ["apple", "banana", "orange"];
let index = fruits8.indexOf("banana");  
console.log("index of banana is "+ index);

//example of includes()

let fruits9 = ["apple", "banana", "orange"];
let hasBanana = fruits9.includes("banana");  
let hasKiwi = fruits9.includes("kiwi"); 
console.log(hasBanana);  // Output: true
console.log(hasKiwi);  // Output: false

//exampleof ForEach()
let fruits = ["apple", "banana", "orange"];
fruits.forEach(fruit => console.log(fruit));
// Output: 
// apple
// banana
// orange

//example of find()
let numbers = [5, 12, 8, 130, 44];
let found = numbers.find(num => num > 10);
console.log(found);  // Output: 12

//exampe of findIndex()
let numbers1 = [5, 12, 8, 130, 44];
let foundIndex = numbers1.findIndex(num => num > 100);
console.log(foundIndex);  // Output: 3

//exampe of reverse
let fruits10 = ["apple", "banana", "orange"];
fruits10.reverse();  
console.log(fruits10);  // Output: ["orange", "banana", "apple"]

//example of sort()
let fruits11 = ["banana", "apple", "orange"];
fruits11.sort();  
console.log(fruits11);  // Output: ["apple", "banana", "orange"]