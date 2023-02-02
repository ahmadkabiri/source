

class Person {

    constructor(personname,personAge,personJob,personAddress){

        this.personname = personname ;
        this.personAge = personAge ;
        this.personJob = personJob ;
        this.personAddress = personAddress ;
    }


    startDev () {
        console.log(`  برنامه نویس کارشو استارت زد  ${this.personname}`)
    }

    static removePerson () {
        return "شخص مورد نظر شما از شرکت حذف شد"
    }


    getAge() {

        return this.personAge
    }
}

let personAli = new Person("Ali",21,"Android Developer",'Tehran')

console.log(Person.removePerson())

console.log(personAli.removePerson()) ;






