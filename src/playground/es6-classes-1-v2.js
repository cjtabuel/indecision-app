class Person {
  constructor (name = 'Anonymous', age = 0) {
    this.name = name,
    this.age = age
  }
  getGreeting() {
    return `Hi. I am ${this.name}.`
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age)
    this.major = major
  }
  hasMajor() {
    return !!this.major
  }
  getDescription() {
    let description = super.getDescription()

    if (this.hasMajor) {
      description += ` Their major is ${this.major}`
    }

    return description
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age)
    this.homeLocation = homeLocation
  }
  getGreeting() {
    let greeting = super.getGreeting()

    if (this.homeLocation) {
      greeting += ` I am visiting from ${this.homeLocation}.`
    }
    
    return greeting
  }
}

// const me = new Person('CJ', 29)
// console.log(me.getDescription())

// const other = new Person()
// console.log(other.getDescription())

const student = new Student('CJ', 29, 'CS')
console.log(student.getDescription())

const travelingPerson = new Traveler(undefined, undefined, 'SF')
console.log(travelingPerson.getGreeting())

class ReactComponent {
  constructor(props) {
    this.props = props
  }
}

class Options extends ReactComponent {
  constructor(props) {
    super(props)
  }
  handleRemoveAll() {
    return `${this.props}`
  }
}

const optionsComponent = new Options (['thing 1', 'thing 2', 'thing 5'])
console.log(optionsComponent.handleRemoveAll())

const props = {
  title: 'some title',
  subTitle: 'some subTitle'
}