// calculate unique values in an array  ,array is sorted ,if not sort an array ,

// eg  arr=[2,2,3,3,5,6,1]    output 5

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
