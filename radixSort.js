

function getDigit(number, index) {
  // kis index pe kon sa digit hai starting from back

  return Math.floor(number / Math.pow(10 , index)) % 10;
}

function digitCount(num) {
  // example 41239  will return 5 since it has  5  digits

  if (num === 0) return 1;
  return Math.floor(Math.log10(num)) + 1;
}

function mostDigits(num) {
  let maxNumber = Math.max(...num);

  return digitCount(maxNumber);
}

function radixSort(arr) {
  let maxdigitCount = mostDigits(arr);

  for (let i = 0; i < maxdigitCount; i++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j], i);
      digitBuckets[digit].push(arr[j]);
    }
    arr = [].concat(...digitBuckets);
  }

  return arr;
}

console.log(radixSort([170, 45, 75, 90, 802, 24, 2, 66, 1234]));
