
let colors = ["red", "green", "blue"];
let colorscolor = ["red", "green", 12];
//console.log(colors[0]);  // Output: red
//console.log(colors.length);  // Output: 3
//console.log(typeof colors);  // Output: object

//Traditional looing
//let colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
    //console.log(colors[i]);
} 
/* output
red
green
blue
*/

let newcolors = ["red", "green", "blue","orange"];
for (let color of newcolors) {
    //console.log(color);
}
/* output
red
green
blue
orange
*/

//ForEach Example
let eachcolors = ["red", "green", "blue","orange","purple","black"];
/*eachcolors.forEach(function(color) {
    //console.log(color);
//});
*/

// Or using arrow function
//eachcolors.forEach(color => console.log(color));

//For …in loop (not recommended)
let incolors = ["red1", "green1", "blue1"];
for (let index in incolors) {
    console.log(incolors[index]);
}
