// write a function to check if a string is a pallindrome  or not 



function pallindrome(str) {
  const revStr = str.split("").reverse().join("");

  if (revStr === str) {
    return true;
  } else {
    return false;
  }
}

console.log(pallindrome("abba"));

// without using inbuilt function

function pallindromWithoutInbuilt(str) {
  let revStr = "";

  for (let i = str.length-1; i >= 0; i--) {
    let val = str[i];

    revStr = revStr + val;
  }

  if (revStr === str) {
    return true;
  } else {
    return false;
  }
}

console.log("madam",pallindromWithoutInbuilt("madam"));