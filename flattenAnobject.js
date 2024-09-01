
// flatten an object

let obj ={

    name:"adil",
    age:27,
    address: {
        houseNumber:10,
        city:"malout"
    }
}

let newObj = {};

function flattenAnObject(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      flattenAnObject(obj[key]);
    } else {
      newObj[key] = obj[key];

    //   newObj[key] = obj[key];: Assigns the value of the current key from the obj to newObj under the same key.

    }
  }

  return newObj;
}

console.log(flattenAnObject(obj));