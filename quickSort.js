//  Quick Sort an array
// const array = [3, 6, 8, 10, 1, 2, 1];
// Output: [1, 1, 2, 3, 6, 8, 10]

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // pivot element
  let pivot = arr[Math.floor(arr.length / 2)];

  let left = [];

  let right = [];

  let middle = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i]);
    } else if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      middle.push(arr[i]);
    }
  }

  return [...quickSort(left), ...middle, ...quickSort(right)];
}

console.log(quickSort([3, 6, 8, 10, 1, 2, 1]));
