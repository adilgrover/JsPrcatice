// calculate sum range using recursion

function sumRange(num) {
  if (num === 1) {
    return 1;
  } else {
    return num + sumRange(num - 1);
  }
}

console.log(sumRange(3));

// 3+2+1
