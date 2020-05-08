console.log('3_week!')

function Person(name) {
  this.name = name
}

Person.prototype.getName = function() {
  return this.name
}

class Person2 {
  constructor(name) {
    this.name = name
  }
  getName() {
    return this.name
  }
}
