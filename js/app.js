


function User (userName,userAge,userJob){
    this.name = userName 
    this.age = userAge
    this.job = userJob

    this.getName = function () {
        return this.name
    }

    this.getAge = function () {
        return this.age
    }

    this.getJob = function () {
        return this.job
    }

    this.setName = function (newName) {
        this.name = newName
    }

    this.setAge = function (newAge) {
        this.age = newAge
    }

    this.setJob = function (newJob) {
        this.job = newJob
    }

}

let userAli = new User("Ali",19,"Android Developer")



userAli.setAge(10)

console.log(userAli.getJob())



// Es6 - Class (setter - getter = extends ---)


class Person {

constructor (personname , personAge,personJob,personAddress) {
    // console.log(personname,personAge,personAddress,personJob)
    this.username = personname 
    this.personAge = personAge 
    this.personJob = personJob 
    this.personAddress = personAddress

}


}


let personAli = new Person("Ali",19,"front end","tehran") // Call 

console.log(personAli) // object barmigardoone
console.log(personAli.personJob) // object barmigardoone






 