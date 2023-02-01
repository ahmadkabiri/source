

class Person {

    constructor(personname,personAge,personJob,personAddress){

        this.personname = personname ;
        this.personAge = personAge ;
        this.personJob = personJob ;
        this.personAddress = personAddress ;
    }


    startDev () {
        console.log(` برنامه نویس کارشو استارت زد${this.personname}`)
    }

    getAge() {

        return this.personAge
    }
}


class Prefessor extends Person {

    constructor (personname,personAge,personJob,personAddress,personLesson,workExperiance) {

        // this.personname = personname ;
        // this.personAge = personAge ;
        // this.personJob = personJob ;
        // this.personAddress = personAddress ;

        super(personname,personAge,personJob,personAddress)

        this.personLesson = personLesson ;
        this.workExperiance = workExperiance ;

    }

    startDev () {
        console.log(super.getAge())
        console.log(`استاد تدریسو شروع کرد${this.personname}`)
    }



}

let perfessorRamin = new Prefessor('Ramin',32,'Prefessor','Tabriz','C++',8)

// console.log(perfessorRamin.getAge())
console.log(perfessorRamin.startDev())













