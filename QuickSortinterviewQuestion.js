// https://leetcode.com/problems/sort-an-array/description/


// https://www.youtube.com/watch?v=GfM5z7_WGQE


// 912 number question leetcode

// Given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and
//  with the smallest space complexity possible.

 

// Example 

// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]

function pivotHelperFunction(arr, left, right) {
  let j = left;
  let i = left - 1;
  let pivotIndex = right;

  while (j <= pivotIndex) {
    if (arr[j] < arr[pivotIndex]) {
      i++;

      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    } else {
      j++;
    }
  }

  i++;
  [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];

  return i;
}

function sortQuick(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivotHelperFunction(arr, left, right);

    sortQuick(arr, left, pivotIndex - 1);
    sortQuick(arr, pivotIndex + 1, right);
  }

  return arr;
}


console.log(sortQuick([2,9,4,1,6,3,7,4]));