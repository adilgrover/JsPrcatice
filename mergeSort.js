function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // Split the array into two halves

  let middle = Math.floor(arr.length / 2);

  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

   // Recursively sort each half

  const output = merge(mergeSort(left), mergeSort(right));
  return output;
}

function merge(left, right) {
  let sortedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Merge the two arrays while there are elements in both

  while (leftIndex < left?.length && rightIndex < right?.length) {
    if (left[leftIndex] > right[rightIndex]) {
      sortedArray.push(right[rightIndex]);
      rightIndex++;
    }

    if (left[leftIndex] < right[rightIndex]) {
      sortedArray.push(left[leftIndex]);
      leftIndex++;
    }
  }

   // If there are remaining elements in left array, add them

  while (leftIndex < left.length) {
    sortedArray.push(left[leftIndex]);
    leftIndex++
  }
     // If there are remaining elements in right array, add them
  while (rightIndex < right.length) {
    sortedArray.push(right[rightIndex]);
    rightIndex++
  }

  return sortedArray;
}

console.log(mergeSort([8, 9, 2, 4, 55, 11, 99, 22, 1, 3]));
