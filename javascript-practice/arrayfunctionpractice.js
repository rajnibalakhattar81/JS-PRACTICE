
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
console.log(x);  // Output: 10 (x is unchanged)

//Example of mutability (non-primitive):
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
arr2.push(5);
console.log(arr1);  // Output: [1, 2, 3, 4] (arr1 is changed because both arr1 and arr2 refer to the same array)