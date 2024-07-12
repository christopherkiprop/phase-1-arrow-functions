// Define function expression 'divide'
const divide = function() {
    return 2000 / 100;
  }
  
  // Define arrow function 'square'
  const square = x => x * x;
  
  // Define arrow function 'add'
  const add = (a, b) => a + b;
  
  // Exporting functions to be accessible in other modules (if needed)
  module.exports = {
    divide,
    square,
    add
  };
  