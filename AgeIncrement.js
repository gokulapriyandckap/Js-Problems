// //3. Write a function named "ageIncrementer" which takes three parameter - listOfPersons, name, addedAge

// First parameter will be list of persons in array of objects,
// second parameter will be name in string,
// third parameter will be in number(incrementor value for the age)

// and returns the output in array of objects where the respective person age will be incremented by the given value.

// const persons = [
//   { name: "ram",age: 30 },
//   { name: "sam", age: 21},
//   { name: "kumar", age: 26 },
//   { name: "joshwa", age: 29 },
//   { name: "andy", age: 34 }
// ]

// (person, "andy", 2) => [
//   { name: "ram",age: 30 },
//   { name: "sam", age: 21},
//   { name: "kumar", age: 26 },
//   { name: "joshwa", age: 29 },
//   { name: "andy", age: 36 }
// ] => only andy's age is incremented by 2(from 34 to 36)


// ( [
//   { name: "ram",age: 30 },
//   { name: "sam", age: 21},
//   { name: "kumar", age: 26 },
//   { name: "joshwa", age: 29 },
//   { name: "andy", age: 34 }
// ], "kumar", 5) => [
//   { name: "ram",age: 30 },
//   { name: "sam", age: 21},
//   { name: "kumar", age: 31 },
//   { name: "joshwa", age: 29 },
//   { name: "andy", age: 34 }
// ] => only kumar's age is incremented by 5(from 26 to 31)

function ageIncrementer(persons,name,incrementage) {
        let result = [];
    for (let i = 0; i < persons.length; i++) {
        if (persons[i].name == name) {
            result.push(persons[i]);
            persons[i].age +=  incrementage;
        }   
        else{
            result.push(persons[i]);
        }
    }
    return result
}
console.log(ageIncrementer([
      { name: "ram",age: 30 },
      { name: "sam", age: 21},
      { name: "kumar", age: 26 },
      { name: "joshwa", age: 29 },
      { name: "andy", age: 34 }
    ],"ram",10));
   