// given two strings  write a function to determine if the second string a anagram of first .
// an anagram is a word formed by rearranginh the letters of the another example "cinema" formed from "iceman"

function validAnagram(str1, str2) {
  // basicaly do objects banane hain
  // phir dono objects me keys aur unki frequency compare krni hai

  function frequencyCounter(str) {
    let resultobj = {};

    for (let i = 0; i < str.length; i++) {
      let val = str[i];
      if (resultobj[val] === undefined) {
        resultobj[val] = 1;
      } else {
        resultobj[val]++;
      }
    }

    return resultobj;
  }

  let obj1 = frequencyCounter(str1);
  let obj2 = frequencyCounter(str2);

  // now loop thru first obj and check kar if key of obj1 exists in obj 2 and the frequency is same

  for (let key in obj1) {
    if (obj1[key] !== obj2[key] || !obj2[key]) {
      return false;
    }
  }
  return true;
}

console.log("methiod1",validAnagram("cinema", "iceman"));


// method 2 


// pehli string ko loop through krna hai aur usko frequency counter ki tarah object me transform krna hai
// then doosre string ko loop krna hai aur us object se  compare krna hai 
// check krna hai doosre string ki value pehle object me exist kr rhi hai ki nai 
// if it does not exist return false if it does then object ke key ki value ko 1 se subract kr dena hai 


function secondMethodAnagram(str1, str2) {
  let resultObj = {};

  for (let i = 0; i < str1.length; i++) {
    let val = str1[i];
    if (resultObj[val] === undefined) {
      resultObj[val] = 1;
    } else {
      resultObj[val]++;
    }
  }

  console.log("Empire", resultObj);

  for (let i = 0; i < str2.length; i++) {
    let val = str2[i];


    // if condition can also be written as  if(!resultObj[val]){

    if(resultObj[val] === undefined){

        return false

    }  else{
        resultObj[val]   = resultObj[val]  -1
    }
  }

  return true

  
}

console.log("methiod2",secondMethodAnagram("cinema", "iceman"));
