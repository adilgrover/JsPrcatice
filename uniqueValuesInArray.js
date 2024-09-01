// calculate unique values in an array 




// eg  arr=[2,2,3,3,5,6,1]    output count 5 


function uniqueValuesInArr (arr){

    let resultObj ={}

    for (let i =0;i<arr.length ;i++){

       let value=  arr[i];
       if(resultObj[value] === undefined){
        resultObj[value] =1
 

       } else{
        resultObj[value]++
       }

    }

   return  Object.keys(resultObj).length



}

console.log(uniqueValuesInArr([2,2,3,3,5,6,1]));
 





// remove duplicate values from array


function removeDuplicateValues(arr) {
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
    
    if (resultObj[key] > 1) arrr.push(resultObj[key]);
  }

  console.log(
   "duplicate",
   arrr
 );

  console.log(
    "nocap",
    Object.keys(resultObj).map((num) => parseInt(num))
  );

  return Object.keys(resultObj);

  
}

console.log("remove",removeDuplicateValues([22, 1, 3, 1, 4, 5, 3, 1]));












