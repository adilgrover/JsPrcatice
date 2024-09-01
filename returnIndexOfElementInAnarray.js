// In JavaScript, you can use the indexOf method to find the first occurrence of a specified value in an array 
// and return its index. If the value is not found, indexOf returns -1.


function elementCheck(arr) {
  const newArr = arr.map((item, index) => {
    return arr.indexOf(item);
  });

  return newArr;
}

console.log("hjfuvuyuyg", elementCheck([1, 2, 1, 3, 2, 4, 8, 1, 4]));
   