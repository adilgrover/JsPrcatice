// node class

class Node {
  constructor(value) {
    this.value = value; // The value stored in the node
    this.next = null; // points to next node in the list
  }
}

// linked list class
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // we take the current tail aur usko newnode ko point kr diya
      this.tail.next = newNode;
      // now we update the tail to newnode
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  traverse() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);

      current = current.next; // move to the next node
    }
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    // take two variables i.e current and newTail(previousNode)
    // loop through the linked list by incrementing current one by one
    // at each step check if it is the end of the list
    // if its not the end of the the list increment newTail by 1 ,
    //then move current one step to right again and check it this is the end of the list
    // if it is the end of the list i donot move newTail and make newTail as the tail

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;

      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    // remove node from beginning of the list
    let current = this.head;

    if (!current) {
      return undefined;
    }

    this.head = current.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return current;
  }

  unshift(data) {
    // add node to the beginning of the list
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // let pooranaHead = this.head;

      // this.head = newNode;
      // this.head.next = pooranaHead;

      // the above three lines are also correct . It can be implemented like this also

      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    // return particular value at specific node

    if (index < 0 || index >= this.length) {
      return null;
    }
    let current = this.head;
    let counter = 0;

    // while(counter !== index){
    //   current = current.next ;
    //   counter++
    // }
    // return current

    // above commented code is also correct can either use above code or below code
    while (current) {
      if (index === counter) {
        return current;
      } else {
        current = current.next;
        counter = counter + 1;
      }
    }

    return null;
  }

  set(index, val) {
    // update the particular node to index defined
    // this function will accept value and index
    // if node is not found return false
    // if the node is found set the value of the node to be the value passe to the function and return true;

    var foundNode = this.get(index);
    console.log("foundNode", foundNode);

    if (foundNode) {
      foundNode.value = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return null;
    }

    if (index === this.length) return this.push(val); //if(index === this.length )  return !!this.push(val); we can also write like this to convert to boolean
    if (index === 0) return this.unshift(val); //if(index  === 0)    return !!this.unshift(val);  we can also write like this to convert to boolean
    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var temp = prev.next; // placeholder variable temp is required here

    prev.next = newNode;
    newNode.next = temp;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.shift();

    if (index === this.length - 1) return this.pop();
    let previousNode = this.get(index - 1);
    var removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed

  }

  reverse() {
    let next = null;
    let prev = null;
    let current = this.head;
    this.tail = this.head;
    while (current) {
      next = current.next; // store the next node
      current.next = prev; // reverse
      prev = current;
      current = next;
    }

    this.head = prev;
    return this;
  }

  toString() {
    let result = "";
    let current = this.head;
    while (current) {
      result += current?.value + (current?.next ? "->" : "");
      current = current.next;
    }
    return result;
  }
}

var list = new SinglyLinkedList();
list.push("adil");
list.push("grover");
list.push("jatt don't care");
list.push("poori baabe di aaa mehr");
// console.log("push",list.push("Sultan"))
// console.log(list.traverse());
//  list.set(2,"set chal gya")
// console.log("reverese", list.reverse().toString());
list.insert(2 ,"insert chek kr")

console.log("cgchchch",list.toString());
// console.log("pop",list.pop());
// console.log("shift",list.shift());
// console.log("shift2",list.shift());

// list.unshift("nawa node");
// console.log("newnode",list);
// console.log("get",list.get(2));
