'use strict';

class Student {
  //constructor
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.lateCount = 0;
    this.scores = [];
  }

  //instance methods
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  markLate() {
    this.lateCount += 1;
    return `You've been late ${this.lateCount} times`;
  }

  addScore(score) {
    this.scores.push(score);
  }

  calcAverage() {
    const sum = this.scores.reduce((pre, cur) => pre + cur, 0);
    return sum / this.scores.length;
  }

  //static methods
  static greetStudent() {
    return 'Welcome All Students!!!';
  }
}

const bill = new Student('Bill', 'Clinton', 2);
const bush = new Student('George', 'Bus', 4);

console.log(bill.fullName());
console.log(bush);

console.log(bill.markLate());
bill.addScore(100);
bill.addScore(90);
bill.addScore(85);

console.log(bill.calcAverage());
console.log(Student.greetStudent());
