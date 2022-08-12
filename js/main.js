//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

console.log(Object.values(person3))


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class ourPerson {
    constructor (name, age) {
        this.age = age
        this.name = name
    }

    // Use an arrow to create the printInfo method
    printInfo = () => {return `Name: ${this.name}\nAge: ${this.age}`};

    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age 
    addAge = (age) => {
        age ++;
        return `Big ${age}! Happy Birthday ${this.name}!`;
    }
}

const p1 = new ourPerson ('Angel', 22) 
console.log(p1.printInfo())
console.log(p1.addAge(22))
const p2 = new ourPerson('Ash', 24)
console.log(p2.printInfo())
console.log(p2.addAge(26))


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const ifWord = (word) => {
    return new Promise((resolve, reject) => {
        if ( word.length > 10 ) {
            resolve('Big word')
        }
        else {
            reject('Small word')
        }
    })
}

const result = ifWord('helloooooooooooo')
console.log(result)

// ============= Exercise #4 ============//
// link: https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
const countSheep = function (num){
    let result = "";
    for(let i = 1; i <= num; i++) {  result+= `${i} sheep...`; }
    return result;
  }
console.log(countSheep(8))

// ============= Exercise #5 ============//
// link: https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript
// Convert boolean values to strings 'Yes' or 'No'.
function boolToWord( bool ){
    const str = bool == true ? "Yes" : "No"
    return str
}

console.log(boolToWord(true))
console.log(boolToWord(false))