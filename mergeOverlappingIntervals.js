// leetcode 56 number question

// Given an array of intervals where intervals[i] = [starti, endi], 
// merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.


// if previous end is greater than current start  , there  an overlap ,so  we merge .

// Example usage
// const intervals = [
//     [8, 10],
//     [1, 3],
//     [2, 6],
//     [15, 18]
// ];


function mergeInterval(arr) {

    if(arr.length === 0){
        return [];
    }
  let sortedArray = arr.sort((a, b) => a[0] - b[0]);



  let mergedArray = [];
  let currentInterval = sortedArray[0];

  for (let i = 1; i < sortedArray.length; i++) {
    let nextInterval = sortedArray[i];

    if (currentInterval[1] >= nextInterval[0]) {
      // matlab overlapping

      currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
    } else {
      mergedArray.push(currentInterval);
      currentInterval = nextInterval;
    }
  }

   // Add the last interval
   mergedArray.push(currentInterval);

  return mergedArray
}

console.log(mergeInterval([[1, 3], [2, 6], [8, 10], [15, 18]]))
