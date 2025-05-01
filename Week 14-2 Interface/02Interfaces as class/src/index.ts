// Interfaces have another special property. You can implement interfaces as a class
//Now what is the use of implementing it using classes?
// You can also use functions

interface People {
    name: string,
    age: number,
    isLegal: ()=>boolean
    // OR
    // greet(): string 
}


class Manager implements People{
    name: string;
    age: number;
    number: string; // or you can just write public in constructor
    // constructor(public name: string, public age: number){
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
        this.number = "1398149419"
    }
    isLegal(){      //you don't have to write the function keyword in the class
        return this.age > 18
    }
}

class God extends Manager{
    constructor(name: string, age: number){
        super(name, age)
    }
}
// difference between interfaces and types? You can use interface in classes. You can't use classes in types

// abstract class can also have default implementations

abstract class User {
    name: string;  
    constructor(name: string) {
      this.name = name;
    }
  
    abstract greet(): string;
    hello() {
      console.log("hi there");
    }
}
  
class Employee extends User {
    name: string;  
    constructor(name: string) {
      super(name);
      this.name = name;
    }
    greet() {
      return "hi " + this.name;
    }
}
