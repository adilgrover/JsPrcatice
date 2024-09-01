// remove duplicate values from array

function returnDuplicateValues(arr) {
  let resultObj = {};
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    if (resultObj[val] === undefined) {
      resultObj[val] = 1;
    } else {
      resultObj[val]++;
    }
  }

 

  let arrr = [];

  for (let key in resultObj) {
    if (resultObj[key] > 1) {
      arrr.push(key);
    }
  }


  return arrr;
}

console.log("remove", returnDuplicateValues([22, 1, 3, 1, 4, 5, 3, 1]));





