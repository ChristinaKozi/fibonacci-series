function fibonacci(num) {
  if (num < 2) {
    return num
  }

  let a = 0
  let b = 1
  let sum = 0
  for (let i = 2 ; i <= num; i++) {
    sum = a + b
    a = b
    b = sum
    }
  return sum
}
  

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
