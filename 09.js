const person = {
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  }

//1
const result = Object.keys(person).map(key => `${key}: ${person[key]}`)
console.log(result);

//2
console.log(Object.entries(person))