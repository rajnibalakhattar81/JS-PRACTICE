/*Student Task: Count Test Statuses Using reduce()
Scenario:
You are given an array of test results from an automated test suite. Each item in the array is either 'pass', 'fail', or 'skipped'.

let testResults = ['pass', 'fail', 'pass', 'pass', 'fail', 'skipped', 'pass'];

Task:
Using reduce(), write a JavaScript function to count how many times each status appears, and return the result as an object like this:
{
  pass: 4,
  fail: 2,
  skipped: 1
}

Expected Function Output:

{
  pass: 4,
  fail: 2,
  skipped: 1
}
  */

let testResults = ['pass', 'fail', 'pass', 'pass', 'fail', 'skipped', 'pass'];

const counted = testResults.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {}); // Initial value is an empty object

console.log(counted);



