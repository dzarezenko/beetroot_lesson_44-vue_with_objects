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

class GenderedPerson extends Person {

  constructor(firstName, lastName, age, gender) {
    super(firstName, lastName, age);
    this.gender = gender;
  }

}

export { Person, GenderedPerson };
