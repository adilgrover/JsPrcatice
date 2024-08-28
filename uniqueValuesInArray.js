// calculate unique values in an array 




// eg  arr=[2,2,3,3,5,6,1]    output 5 


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







