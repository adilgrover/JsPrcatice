function charCount (str){
    // make object to return at end
    // loop over the string for each character ..
    // if character is a number/letter and is key in the object add one to count
    // if character is number/letter and not in object add it to object and set its value to 1
    // if chracter is seomething else (space ,period ,+ ,- etc ) do not do anything
    // return object at end


    let result ={}
    for(let i=0; i<str.length;i++){
        let char = str[i];
        if(result[char] >0){
            result[char]++

        }else{
            result[char] =1
        }
    }
    return result

}

console.log(charCount ("hellol"));

// reverse a string 

function reverse(str){

 return   str.spilt("").reverse().join("")

}

console.log("rev",reverse("adil"))