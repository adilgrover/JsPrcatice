


class Dog {
    constructor(name,breed){

        this.name =name;
        this.breed =breed

    }
}

const myDog = new Dog('Rex', 'German Shepherd');
const myDog2 = new Dog('jimmy', 'beagle');


console.log("instance",myDog,myDog2);

class Doggo {
    constructor(name,breed){

        this.abc =name;
        this.xyz =breed

    }
}

const mySiraDog = new Doggo('Bozoo', 'Labrador');

console.log("instance2",mySiraDog);