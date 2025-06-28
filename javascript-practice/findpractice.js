
//use find in array of numbers

let numbers = [5, 12, 8, 130, 44];
let foundnumber = numbers.find(num => num > 10);
console.log(foundnumber);  // Output: 12


//use find in array of names

let names = ["first", "second", "third"];
let foundname = names.find(name => name=='third');
console.log(foundname);  // Output: third