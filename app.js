//1)
let num1 = 10;
let num2 = 5;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b !== 0 ? a / b : "Division by zero error");

var additionResult = add(num1, num2);
var subtractionResult = subtract(num1, num2);
var multiplicationResult = multiply(num1, num2);
var divisionResult = divide(num1, num2);

console.log("Addition Result:", additionResult);
console.log("Subtraction Result:", subtractionResult);
console.log("Multiplication Result:", multiplicationResult);
console.log("Division Result:", divisionResult);


//2)
const users = [
    { name: "Alice", age: 25, purchases: [20, 30, 50] },
    { name: "Bob", age: 35, purchases: [100, 200] },
    { name: "Charlie", age: 28, purchases: [5, 15, 25] },
    { name: "Diana", age: 42, purchases: [] }
];

//i) Map using-
  const userSummaries = users.map(user => ({
    name: user.name,
    totalPurchases: user.purchases.reduce((sum, purchase) => sum + purchase, 0)
  }));
  console.log("User Summaries:", userSummaries);
  

//ii) Filter Using
  const highSpenders = userSummaries.filter(user => user.totalPurchases > 50);
  console.log("High Spenders:", highSpenders);
  
//iii) Reduce using
  const totalRevenue = users.reduce(
    (sum, user) => sum + user.purchases.reduce((userSum, purchase) => userSum + purchase, 0),0);
  console.log("Total Revenue:", totalRevenue);
  
//iv)  flatMap using
  const allPurchases = users.flatMap(user => user.purchases);
  console.log("All Purchases:", allPurchases);
  

//3)  call back
function processNumbers(num1, num2, callback) {
    console.log(`Processing numbers: ${num1} and ${num2}`);
    return callback(num1, num2);
  }
  
  function addNumbers(a, b) {
    return a + b;
  }
  
  function multiplyNumbers(a, b) {
    return a * b;
  }
  
  const sum = processNumbers(5, 10, addNumbers);
  console.log("Sum:", sum); // Output: 15
  
  const product = processNumbers(5, 10, multiplyNumbers);
   console.log("Product:", product);  // output: 50
  
  const difference = processNumbers(10, 5, (a, b) => a - b);
  console.log("Difference:", difference); // Output: 5
  

//4) reverseString
function reverseString(input) {
    const charArray = input.split('').reverse().join("")
    return charArray;
}
  
  const originalString = "Hello, World!";
  const reversed = reverseString(originalString);
  
console.log("Original String:", originalString);
console.log("Reversed String:", reversed);       
  










  
// 1. `map`: Transform users to show only their names and total purchases
    
// 2. `filter`: Get only users with total purchases above a certain threshold
   
// 3. `reduce`: Calculate the total revenue from all purchases
  
// 4. `flatMap`: Flatten all purchases into a single array