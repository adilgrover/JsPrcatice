
// insertion sort is a simple sorting algorithm that builds the final sorted array one at a time .
// It is much like the way u sort playing cards in  ur hands , by taking each card and inserting it into its correct position 
//among the already  sorted cards.

// 1)assume the first element is sorted. start  by picking the second element in the array.

// 2) now compare the second element with the one before it and swap if necessary

// 3) continue to the next element and if it is in the incorrect order ,
//iterate through  the sorted portion (i.e the left side ) to place the element in the correct place.

// Repeat until the array is sorted.How Insertion Sort Works

// what chat gpt says 
// Start from the Second Element:

// Assume the first element is sorted. Start with the second element and compare it with the elements before it.
// Compare and Shift:

// Compare the current element with the elements in the sorted portion of the array (elements before the current element).
// Shift all elements that are greater than the current element one position to the right to make space for the current element.
// Insert the Element:

// Place the current element into its correct position in the sorted portion.
// Repeat:

// Move to the next element and repeat the process until the entire array is sorted.

// Example Walkthrough
// Let’s sort the array [64, 34, 25, 12, 22, 11, 90] using Insertion Sort:

// Initial Array: [64, 34, 25, 12, 22, 11, 90]

// Pass 1:

// Key: 34
// Compare 34 with 64 (in the sorted portion). Since 34 is smaller, shift 64 to the right.
// Insert 34 in the correct position.
// Array after Pass 1: [34, 64, 25, 12, 22, 11, 90].
// Pass 2:

// Key: 25
// Compare 25 with 64 and 34. Shift both 64 and 34 to the right.
// Insert 25 in the correct position.
// Array after Pass 2: [25, 34, 64, 12, 22, 11, 90].
// Pass 3:

// Key: 12
// Compare 12 with 64, 34, and 25. Shift all three to the right.
// Insert 12 in the correct position.
// Array after Pass 3: [12, 25, 34, 64, 22, 11, 90].
// Pass 4:

// Key: 22
// Compare 22 with 64, 34, and 25. Shift 64 and 34 to the right.
// Insert 22 in the correct position.
// Array after Pass 4: [12, 22, 25, 34, 64, 11, 90].
// Pass 5:

// Key: 11
// Compare 11 with 64, 34, 25, 22, and 12. Shift all five to the right.
// Insert 11 in the correct position.
// Array after Pass 5: [11, 12, 22, 25, 34, 64, 90].



function insertionSort(arr) {
     // Traverse through 1 to n (assuming the first element is sorted)
  for (let i = 1; i < arr.length; i++) {
    let currentElement = arr[i]; // Current element to be inserted
    let j = i - 1; // Index of the last element in the sorted portion

    while (j >=0  && arr[j] > currentElement) {
      arr[j + 1] = arr[j];

      j--;
    }

   // j after the while loop is the index of the last element that was greater than currentElement.
// arr[j + 1] is thus the correct position where currentElement should be inserted to maintain sorted order.

    arr[j + 1] = currentElement;
  }

  return arr;
}

console.log(insertionSort([64, 34, 25, 12, 22, 11, 90]));
