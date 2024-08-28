// write a function called sum zero which accepts a sorted array of integers. the function find the first pair where the sum is 0.
// return an array that includes both values that sum to zero or undefined if pair does not exist

//  example sumZero([-3,-2,-1,0,1,2,3])  // [-3,3]
//  example sumZero([-2,0,1,3])  // undefined

// let numbers = [10, 5, 100, 1];
// numbers.sort((a, b) => a - b); // Sorts in ascending order
// console.log(numbers); // Output: [1, 5, 10, 100]

// numbers.sort((a, b) => b - a); // Sorts in descending order
// console.log(numbers); // Output: [100, 10, 5, 1]

// let numbers2 = [10,-2,-8,0, 5, 100, 1];

// numbers2.sort((a, b) => a-b); // Sorts in ascending order
// console.log(numbers2); 


// multiple pointer problem

//steps  initialiase the index of pointer .
// Start with one pointer at the begining of array and start with another pointer at end of array

//  loop thru the array and check if first elemnt and last elemt sums to zero the return that pair of elements
// if the sum is less than zero than move left pointer to one step towardds right .

// if sum is greater than zero than move the right pointer towards left .

// this goes on untill left pointer collides with right pointer or it surpasses it 

function sumOfpairsTocheckZero(arr) {
  let left = 0;
  let right = arr.length-1;

  while (left < right) {
    if (arr[left] + arr[right] === 0) {
      return [arr[left], arr[right]];
    }

    if (arr[left] + arr[right] < 0) {
      left++;
    }
    if (arr[left] + arr[right] > 0) {
      right--;
    }
  }

  return undefined
}

console.log(sumOfpairsTocheckZero([-3,-2,-1,0,1,2,3]));
