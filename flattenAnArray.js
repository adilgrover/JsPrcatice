//  flatten an array let arr= [1,4,1,5,[4,8,[1,6,2,[3,9,6,1,3,1,6,7,3]]]]
let  flatArr= [];

function flattenAnArray(arr) {
  

  let newArr = arr.map((item, index) => {
    if (Array.isArray(item)) {
      flattenAnArray(item);
    } else {
      flatArr.push(item);
    }
  });

  return flatArr;
}

console.log(
  flattenAnArray([1, 4, 1, 5, [4, 8, [1, 6, 2, [3, 9, 6, 1, 3, 1, 6, 7, 3]]]])
  
);


// do not mistake putting let flatArr=[] inside the function beacause if will start with empty array each 
// time recursion call is and and will not retain previous pushed values