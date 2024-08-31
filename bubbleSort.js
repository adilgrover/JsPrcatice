// write a function to sort an array

// use bubble sort

// step 1 start looping with a variable called i at the end of the array towards the beginning

//  step 2 start an inner loop with a variable called j from the beginning untill i-1
// beacuse last value cement hoti jaegi array ki after each  complete iteration so we donot need to compare that last index value

// step 3 if arr[j] is greater than arr[j+1] swap those two values
// last step return the sorted array

// example arr= [77,6,2,9]   how many comparisons in first iteration ? three(jitni array ki length usse ek kam) . that's why j<i-1
// how many comparisons in second iteration ? two  ans so on

//for (let i = arr.length; i > 0; i--) {    i-- because each time we need to omit last array elemnt ,
// that has cemented its place and needs no iteration


function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      // swap

      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];

        arr[j] = arr[j + 1];

        arr[j + 1] = temp;
      }
    }

    console.log("One iteration Complete");
  }

  return arr;
}

console.log(bubbleSort([1, 2, 4, 2, 66,  34, 99, 6]));

function bubbleSortTwo(arr) {
    for (let i = 0; i < arr.length-1; i++) {
      for (let j = 0; j <  arr.length - 1 -i; j++) {
        // swap
  
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
  
          arr[j] = arr[j + 1];
  
          arr[j + 1] = temp;
        }
      }
  
      console.log("One iteration Complete");
    }
  
    return arr;
  }
  
  console.log("two",bubbleSortTwo([1, 2, 4, 2, 66,  34, 99, 6]));

// lets think of a iteration where there are no swaps , so  we donot need to do further iterations and 
// break there from loop beacuse no swaps means array is already sorted.

// lets assume initially noSSwaps is true   if the code goes in " if (arr[j] > arr[j + 1]) " condition noSwap will become false



function OptimisedBubbleSort(arr) {
  let noSwaps;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      // swap

      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];

        arr[j] = arr[j + 1];

        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;

    console.log("One iteration Complete");
  }

  return arr;
}

console.log(OptimisedBubbleSort([1, 2, 4, 2, 66, 34, 99, 6]));
  
