//example of map()
const numbers = [1, 2, 3, 4];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);  // Output: [1, 4, 9, 16]

//example of filter()
const ages = [12, 18, 22, 10, 30];
const adults = ages.filter(age => age >= 18);
console.log(adults);  // Output: [18, 22, 30]

//example of reduce()
const numbers1 = [1, 2, 3, 4];
const sum = numbers1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum);  // Output: 10