// Selection Sort is a straightforward sorting algorithm that works by repeatedly
// finding the minimum element from the unsorted portion of the array and placing it at the beginning.
// here we donot swap at every iteraion like bubble sort

//// exa,plae let arr=[5,3,4,1,2]

// step 1 we assign minimum value to first element here it is 5

// step 2 we compare 5 and 3 so now minimum value is updated to 3 now we compapre that minumum value with next value

// so we compare 3 and 4 minimum still is 3 , now we compare 3 and 1 ,now min is updated to 1
// now we compare 1 and 2 min is still 1 ,

// now that we have reached the end we will swap minimum value with first value of an array ,so we swap 5 and 1

// now 1 has cemented its place so now we compare rest of the array and so on.

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        // update min

        min = j;
      }
    }

    let temp = arr[i];

    arr[i] = arr[min];
    arr[min] = temp;
  }

  return arr;
}

console.log(selectionSort([5, 3, 4, 1, 2]));

function selectionSortOptimised(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        // update min

        min = j;
      }
    }

    if (i !== min) {
      let temp = arr[i];

      arr[i] = arr[min];
      arr[min] = temp;
    }
  }

  return arr;
}

console.log(selectionSortOptimised([0, 2, 5, 3, 4, 1]));
