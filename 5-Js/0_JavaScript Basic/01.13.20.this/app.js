let animal= {
    kind: 'cat',
    sound: 'miau',
    legs: 4,
    tail: true,
    numOfLegs: function() {
        return this.legs //animal.legs will return error in line 16
    }
}

console.log(animal['numOfLegs']())

let bird = animal
animal = 66
console.log(animal)
console.log(bird.numOfLegs())

bird = null
//find a way to access garbage collection


//----------------

function changeAgeImpure(person) {
    person.age = 25;
    return person;
}

var alex = {
    name: 'Alex',
    age: 30
};

var changedAlex = changeAgeImpure(alex);
console.log(alex); // -> { name: 'Alex', age: 25 }
console.log(changedAlex); // -> { name: 'Alex', age: 25 }

//--.--

function changeAgePure(person) {
    var newPersonObj = JSON.parse(JSON.stringify(person));
    newPersonObj.age = 25;
    return newPersonObj;
}
var alex = {
    name: 'Alex',
    age: 30
};
var alexChanged = changeAgePure(alex);
console.log(alex); // -> { name: 'Alex', age: 30 }
console.log(alexChanged); // -> { name: 'Alex', age: 25 }



//----------------



const person2 = {
    firstName: "Merry",
    lastName: 'Christmas',
    birthdate: new Date('9-10-1994'), //transform birthdate into date-object
    calculateAge: function(){
        const diff = Date.now() - this.birthdate.getTime()//now() (in ms) and getTime() (in ms)
        //diff is the age in ms
        const ageDate= new Date(diff)
        //date.now() returns ms  starting from 1970
        return Math.abs(ageDate.getUTCFullYear() - 1970)
        //
    }
}

let x = person2.calculateAge()
console.log(x)

////////////////////////////////777------- Person Constructor -  starting with capital Letter!!

function Person(name){
    this.myName = name
}
//a constructor is a function used to build up an object and must start with Capital letter
//to call a constructor, we need new keyboard
const trainer1 = new Person('Safone')
console.log(trainer1)
const trainer2 = new Person('Mustafa')
console.log(trainer2)
const myDate = new Date('Mar-8-1986')
console.log(myDate)

// execise
function Animal(kind,sound,legs,tail){
    this.kind = kind,
    this.sound = sound,
    this.legs = legs,
    this.tail = tail,
    this.f = function() {
        return this.legs 
    }
}

const bird2 = new Animal('bird', 'piep', 2, false)
console.log(bird2)
let birdLegs = bird2.f()
console.log(birdLegs)


//////////////////////7777777777777777
//Constructors always 
let reg1 = /\w+/
let reg2 =  new RegExp('\\w+')
console.log(typeof reg1)

let bool1 = true
let bool2 =  new Boolean('')
console.log(typeof bool2)

let num1 = 12
let num2 =  new Number('')
console.log(typeof num1)

//dont use this
let f1 = function (){e = this.e}
let f2 =  new Function('e = this.e')
console.log( f2)


//////////////////////7777777777777777

function Student(){
    this.name = 'Maria'
    this.gender = 'Female'
}
let studOne = new Student()
studOne.age = 15
let studTwo = new Student()
console.log(studOne)
console.log(studTwo)

Student.prototype.age = 55;
Student.prototype.lastName = 'Stanley';
Student.prototype.welcome = function(){
    return `Hi ${this.name} ${this.lastName}`
}

console.log(studOne)

for(x in studOne){
    console.log(x, ` : ${studOne[x]}`)
}

for(x in studTwo){
    console.log(x, ` : ${studTwo[x]}`)
}

console.log(studTwo.age)
console.log(studTwo) //Zeigt immernoch zwei werte
console.log(studTwo.welcome())

//Prototype to add a feature to the Constructor
//Prototype is invisible property of an object. It returns prototype object of a function which it links to.

a1 = new Animal('horse', 'pieps', 2, false)
a2 = new Animal('dog', 'pieps', 5, false)
Animal.prototype.fLegs = function(){
    (this.legs = 2) ? this.kind = 'bird': this.kind = 'not bird';
}
a1.fLegs()
console.log(a1)

console.log(Animal.__proto__.fLegs)