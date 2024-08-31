// write a function to check if particular value is there in an array or not 



function divideAndConquer(arrNonSorted, num) {

 let arr=   arrNonSorted.sort((a,b)=> a-b)
 console.log(arr);

  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);

    if (arr[mid] > num) {
      // ignore right chunk
      max = mid - 1;
    } else if (arr[mid] < num) {
      //ignore left chunk
      min = mid + 1;
    } else {
      return mid;
    }
  }
  return -1
}

// output is 9 because position/index of 15 in sorted array  is 9

console.log(
  divideAndConquer([1, 2, 3, 4, 5, 6, 8, 9, 32, 12, 41, 15, 16, 29], 15)
);