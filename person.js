// Exercise 6
// In your Person class, introduce a private field named #id that gets a random value when an object is instantiated.
// Create a getter method to retrieve this ID value.
// Instantiate a Person object and try accessing the ID directly and via the getter. 
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this._id = Math.random(); 
    }
  
    get getID() {
      return this._id;
    }
  }
  
 
module.exports = Person;
