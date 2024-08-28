// Example: Suppose you have the array [2, 1, 5, 1, 3, 2] and num is 3. The first subarray of length 3 is [2, 1, 5].



function subArrayMaxSum(arr, num) {
  if (arr.length < num) {
     console.log(
      "Array length must be greater than or equal to the subarray length."
    );
  } else{

    let windowSum = 0;
    let maxSum = 0;
  
    //calculate sum of first window
  
    for (let i = 0; i < num; i++) {
      windowSum = windowSum + arr[i];
    }
  
    maxSum = windowSum;
  
    // console.log(maxSum);
    // slide the window across the array ,subtract previous elemnt and add new element that is added to the window
  
    for (let i = num; i < arr.length; i++) {
      // Update the window sum by subtracting the element that's sliding out and adding the new element
      windowSum = windowSum + arr[i] - arr[i - num];
  
      // Update maxSum if the current window sum is greater
      if (windowSum > maxSum) {
        maxSum = windowSum;
      }
    }
  
    return maxSum;

  }
 
}

console.log(subArrayMaxSum([2, 1, 5, 1, 3, 2], 3));