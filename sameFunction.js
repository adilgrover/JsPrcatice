// write a function called same ,which accepts two arrays. 
// The function should return true if every value in the array has  it's corresponding value squared in the second array .
// The frequncy of values must be same .


// example 

// same([1,2,3], [4,1,9])    returns true

// same([1,2,3], [1,9])    returns false

// same([1,2,1], [1,4,4])    returns false because frequency is not same




// step 1  if length of two array not same return false 

// step 2 loop through array 1 

// step 3 the current element that we are looping thru we will square it and check its index in array two 

// step 4 if index is -1 i.e index does not exit i.e square does not exist in array 2 ,so return false 

// step 5 if index does exist then reove that element from second array 

// let arr1 = [1,2,3]  ; let arr2=   [9,1,4]


function  same(arr1,arr2){

    if(arr1.length !== arr2.length)
    {
        return false
    }

    for (let i=0;i<arr1.length;i++){
       let currentIndex=  arr2.indexOf(arr1[i] ** 2)
       if (currentIndex ==-1){
        return false

       }
       else{
        arr2.splice(currentIndex ,1)
       }
      
    }
    return true
   


}

console.log(same([1,2,3]  , [9,1,4]));
