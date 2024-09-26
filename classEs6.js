class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
}

const myDog = new Dog("Rex", "German Shepherd");
const myDog2 = new Dog("jimmy", "beagle");

console.log("instance", myDog, myDog2);

class Doggo {
  constructor(name, breed) {
    this.abc = name;
    this.xyz = breed;
  }
}

const mySiraDog = new Doggo("Bozoo", "Labrador");

console.log("instance2", mySiraDog);

// we have two types of methods instance methods and class/static methods

// while working with dsa we will mostly be using instance methods

// instance methods are relevant to individual instances

// example;

class Student {
  constructor(fName, LName, year) {
    this.firstName = fName;
    this.lastName = LName;
    this.grade = year;
    this.lateLateef = 0;
    this.score = [];

    // this here refers to the individual instance
  }

  // instance method:-

  fullName() {
    return `Your fullname is ${this.firstName} ${this.lastName}`;
  }

  markLate() {
    this.lateLateef += 1;
    if (this.lateLateef >= 3) {
      return `You are expelled`;
    }
    return `${this.firstName} ${this.lastName}   has been late ${this.lateLateef} times`;
  }

  addScore(score) {
    this.score.push(score);
    return this.score;
  }
  calculateAverage() {
    let sum = this.score.reduce(function (a, b) {
      return a + b;
    });
    return sum / this.score.length;
  }
}

// object created from that class is called instance

// apne aap me class ka ki matlab ni hai isko use krne instance banana padta hai

let firstStudent = new Student("adil", "grover", 22);

console.log("FStudent", firstStudent.fullName());
console.log("FStudentascasc", firstStudent.markLate());
console.log("late", firstStudent.markLate());
console.log("late", firstStudent.markLate());

console.log("score", firstStudent.addScore(88));

console.log("score", firstStudent.addScore(90));
console.log("average", firstStudent.calculateAverage());
