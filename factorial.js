// factorial of a number

// method 1 with for loop

function factorial(num) {
  let initialMultiplyValue = 1;

  for (let i = num; i > 0; i--) {
    initialMultiplyValue = initialMultiplyValue * i;
  }

  return initialMultiplyValue;
}

console.log(factorial(4));

// method 2 with recursion

function factorialWithRecursion(num) {
  if (num === 1) {
    return 1;
  }

  return num * factorialWithRecursion(num - 1);
}

console.log(factorialWithRecursion(3));
