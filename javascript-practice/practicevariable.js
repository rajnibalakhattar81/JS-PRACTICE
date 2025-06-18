

//************Example of Var************
function exampleVar() {
  var name = "John";
  if (true) {
     var name = "Jane"; // same variable, function-scoped
    console.log("************"+name); // Output: Jane
  }
  console.log(name); // Output: Jane
}

// **************Example of let***************
function exampleLet() {
  let name = "John";
  if (true) {
     let name = "Jane"; // same variable, block-scoped
    console.log("************"+name); // Output: Jane
  }
  console.log(name); // Output: John
}

// ***********Example of const*********
function exampleConst() {
  const name = "John1";
  if (true) {
     //name = "Jane1"; // it will throw an error , assignment to a constant variable
    console.log("************"+name); // output: John1
  }
  console.log(name); // output: John1
}

exampleVar();
exampleLet();
exampleConst();

// ********Practicing Hoisting  with let and const***************
console.log(y); // Error: Cannot access 'y' before initialization
let y = 10;

console.log(z); // Error: Cannot access 'z' before initialization
const z = 15;
