// write a function called same ,which accepts two arrays. 
// The function should return true if every value in the array has  it's corresponding value squared in the second array .
// The frequncy of values must be same .


// example 

// same([1,2,3], [4,1,9])    returns true

// same([1,2,3], [1,9])    returns false

// same([1,2,1], [1,4,4])    returns false because frequency is not same



// we will do this using frequency counter pattern

// crreate two objects that will give frequency of each array element 

// then  loop thru first array and check if its sqauare exits in second array with same frequency 

function sameUsingFrequencyCounterPattern(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  function frequencyCounter(arr) {
    let resultObj = {};
    for (let i = 0; i < arr.length; i++) {
      let value = arr[i];
      if (resultObj[value] === undefined) {
        resultObj[value] = 1;
      } else {
        resultObj[value]++;
      }
    }

    return resultObj;
  }

  let arr1Obj = frequencyCounter(arr1);
  let arr2Obj = frequencyCounter(arr2);

  //  console.log("test",arr1Obj,arr2Obj)

  // check if every key in arr1Obj  has its sqaure in arr2Obj with same frequency

  for (let key in arr1Obj) {
    let squaredKey = key ** 2;
    // If squaredKey does not exist in arr2Obj or frequencies do not match, return false

    if (!arr2Obj[squaredKey] || arr1Obj[key] !== arr2Obj[squaredKey]) {
      return false;
    }
  }
  return true;
}


console.log(sameUsingFrequencyCounterPattern([1,2,3],[1,4,9]));


