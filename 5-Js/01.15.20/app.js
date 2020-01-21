// let arr = ['apple', 'orange', 'banana', 'pineapple']

// let map = arr.map(function(x){
//     return (x == 'banana')? 'banana' : null ;
// })

// let arrow = arr.map(fruit => {
//     return (fruit == 'banana') ? 'banana' : null ;
// })
// console.log(arrow)

let animal = {
    eats: true,
    doesEat: function(){
        return this.eats
    }
}
//console.log(rabbit.doesEat())

//create an Object using Object.create
// let rabbit = Object.create(animal, {
//     longEars: {value: 2},
//     jumps:{value: true}
// }
// )

// let rabbit = Object.create(animal)
// rabbit.longEars = 2
// rabbit.jumps = true
// console.log(rabbit)

//Recreate our person object

// const user = {
//     firstName: '',
//     lastName: '',
//     age: 16,
//     martialStatus: ''

// }

// const userProtos = {
//     gettings:  function(){
//         return `Hello Mrs ${this.firstName} ${this.lastName}`
//     },
//     getMarried: function(newLastName){
//         this.lastName = newLastName
//         this.martialStatus = 'married'
//     }
// }
// let guest = Object.create(userProtos)

// guest.firstName = 'Farah'
// guest.lastName = 'Yousef'
// guest.age = 22
// guest.martialStatus = 'single'
// guest.getMarried('Nelson')
// console.log(guest.gettings())
// console.log(guest)

class User{
    //we should start with constructor
    constructor(userName, passWord){
        this.name = userName;
        this.pass = passWord
    }
    //we write the properties insice the constructor 
    //but we write the methods outside the constructor
    changePass(newPass){
        this.pass = newPass
    }
}

//the Usage (die Verwendung):
let u1 = new User('Kumaro', '1234')
u1.changePass('4321')
console.log(u1)


class Person {
    constructor(firstName, lastName, bOD){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(bOD);
    }
    gettings(){
        return `Hello Mr ${this.firstName} ${this.lastName}`
    }
    calAge(){
        const diff = Date.now() - this.birthday.getTime()
        const ageDate = new Date(diff)
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }
}
let p1 = new Person('Kumaro', 'Schwarz')
console.log(p1.gettings())


let mustafa = new Person('Mustafa', 'Othman', '08-19-1987')
console.log(mustafa.calAge())
console.log(mustafa)