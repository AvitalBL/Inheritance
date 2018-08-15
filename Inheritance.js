class Vehicle {
    //define the constructor function within the class
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
    }

    //define any other functions/properties of the class
    honk() {
        console.log("Beep! Beep!");
    }

    static getInfo() {
        console.log("Cars are great!!");
    }

    static randomStep(factor) {
        var x = (Math.floor(Math.random() * 100) + 1)
        return x*factor;
    }
}



var honda = new Vehicle(0, 0, 3);
honda.honk();
Vehicle.getInfo();
Vehicle.randomStep();

//PARTNER EXERCISE 3

class Car extends Vehicle {
    constructor(x, y, ) {
        super(x, y, 5);
    }
    turnOnAC() {
        console.log('Cold!');
    }
    


}

class FastCar extends Car {
    constructor(x, y) {
        super(x, y)
        this.speed = Vehicle.randomStep(2) 
    }
    
}

class RaceCar extends Car {
   
    constructor(x, y) {
        super(x, y)
        this.speed = Vehicle.randomStep(4) 
    }

    
}

var Ferrari = new RaceCar(4,6);
console.log(Ferrari);

// var myCar = new Car(0, 0);
// myCar.move()
// myCar.turnOnAC()


class Airplane extends Vehicle {
    constructor(x, y, speed, altitude) {
        super(x, y, speed);
        this.altitude = altitude;
    }

    takeOff (newAltitude) {
        this.altitude =  newAltitude;
    }

    landing (newAltitude) {
        this.altitude =  newAltitude;

    }

}
 var boeing = new Airplane(2, 3, 70, 200);
 console.log(boeing);


class Bicycle extends Vehicle {
    constructor(x, y) {
        super(x, y, 2);
    }
    honk() {
        console.log("Hey! Watch out!");
    }
}




//--------------------------

class User {
    //define the constructor function within the class
    constructor(name, department, courseDate) {
        this.name = name;
        this.department = department;
        this.courseDate = courseDate;
    }

    //define any other functions/properties of the class
    speak(sentence) {
        console.log(this.name + " says: '" + sentence + "'");
    }

    moveDepartment(newDepartment) {
        this.department = newDepartment;
    }
}
//use the `extends` keyword to inherit from other classes
class Bob extends User {
    constructor(courseDate) {
        //call super in the constructor to invoke the parent's constructor
        super("Bob", "Bob's Department", courseDate);
    }
}

const b = new Bob();
b.speak('Hello!');
//   // Bob says: 'Hello!'

//   class Bob extends User{
//     constructor (courseDate) {
//       //call super in the constructor to invoke the parent's constructor
//       super("Bob", "Bob's Department", courseDate);
//     }

//     speak (sentence) {
//       //use super again to invoke the parent's `speak`
//       super.speak(sentence);
//       //add something unique to this class's `speak`
//       console.log('...and a hush falls over the crowd...');
//     }
//   }

//   const b = new Bob();
//   b.speak('Hello!');
//   // Bob says: 'Hello!'

console.log(b);