


// function Person (firstname,lastname,age) {
//     // this.firstname = firstname 
//     // this.lastname = lastname
//     // this.age = age

//     this.getFirstName = function (){
//         return this.firstname
//     }
//     this.getLastName = function (){
//         return this.lastname
//     } 
//     this.getAge = function (){
//         return this.age
//     }
//     this.setFirstName = function (newName){
//       this.firstname = newName
//     }
//     this.setLastName = function (newName){
//       this.lastname = newName
//     } 
//     this.setAge = function (newAge){
//         this.age = newAge
//     }

// }

// // let aliPerson = new Person("ali","kabiri",18)
// let aliPerson = new Person()

// // aliPerson.setAge(22)

// aliPerson.setFirstName("AHMAD")
// aliPerson.setLastName("Kabiri")
// aliPerson.setAge(19)

// console.log(aliPerson.getFirstName("AHMAD") )
// console.log(aliPerson.getLastName("Kabiri") )
// console.log(aliPerson.getAge(19) )


// console.log(aliPerson)



class Person1 {
    constructor(personName,personLastName,Age){
        this.username = personName ;
        this.personLastName = personLastName ;
        this.age = Age
    }

    startDev () {
        console.log(`برنامه نویس ${this.username} کارشو استارت زد`);
    }

}


let personAli = new Person1("Ali","hosseini",22)

console.log(personAli);

personAli.startDev()





