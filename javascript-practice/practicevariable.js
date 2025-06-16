

//Example of Var
function exampleVar() {
  var name = "John";
  if (true) {
     var name = "Jane"; // same variable, function-scoped
    console.log("************"+name); // Output: Jane
  }
  console.log(name); // Output: Jane
}

// Example of Let
function exampleLet() {
  let name = "John";
  if (true) {
     let name = "Jane"; // same variable, block-scoped
    console.log("************"+name); // Output: Jane
  }
  console.log(name); // Output: John
}

// Example of Const
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