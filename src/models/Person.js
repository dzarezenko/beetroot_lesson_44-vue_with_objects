class Person {

  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getName() {
    return `${this.firstName} ${this.lastName}`;
  }

}

export default Person;
