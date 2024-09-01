// calculate unique values in an array  ,array is sorted ,if not sort an array ,

// eg  arr=[2,2,3,3,5,6,1]    output 5

// The function uniqueValuesInArrUsingMultiplePointer works as follows:

// Checks for empty array and handles it.
// Sorts the array in ascending order.
// Uses two pointers (i for tracking unique values, and j for iterating) to identify and place unique values in their correct positions.
// Counts and returns the number of unique values.


function uniqueValuesInArrUsingMultiplePointer(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sortedArr = arr.sort((a, b) => a - b);

  let i = 0;

  for (let j = 1; j < sortedArr.length; j++) {
    if (sortedArr[i] !== sortedArr[j]) {
      i++;
      sortedArr[i] = sortedArr[j];
    }
  }

  return i + 1;
}

console.log(uniqueValuesInArrUsingMultiplePointer([2, 2, 3, 3, 5, 6, 1]));

// Purpose: The value of i represents the index of the last unique element found. Since array indices start from 0,
//  the total count of unique values is i + 1.
// Example:

// For the sorted array [1, 2, 3, 5, 6]:

// The last unique element is at index 4 (i = 4).
// The total number of unique values is 4 + 1 = 5.
