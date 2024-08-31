// check odd values in an array and return them.


function withoutRecursion (arr){

    let newArr=[]

    for (let i=0;i<arr.length;i++){
        if(arr[i] % 2 !==0){
            newArr.push(arr[i])

        }

    }

    return newArr


}

console.log(withoutRecursion([1, 2, 3, 4, 5, 6, 7, 8, 9]));

function withRecursion(arr) {
  if (arr.length === 0) return [];

  let currentElement = arr[0];

  let newArr =   arr.slice(1);


//

const UpdatedArray = withRecursion(newArr)

  if (currentElement  % 2 !== 0){


    
    return [currentElement,...UpdatedArray]


  }   else{

    return UpdatedArray

  }
}

console.log(withRecursion([1, 2, 3, 4, 5, 6, 7, 8, 9]));