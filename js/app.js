
// let mySet = new Set()

// mySet.add("Ali")



// console.log(mySet,mySet.size)




// let myWeakSet = new WeakSet()

// let fakeObj = {
//     data:"Fake Data"
// }

// myWeakSet.add(fakeObj)


// console.log(myWeakSet)

function FakeData () {
    this.data = {
        data: "Fake Data"
    }
}

window.fakeData = new FakeData()

console.log(window)

let mySet = new WeakSet()

mySet.add(window.fakeData)

delete window.fakeData

console.log(window.fakeData)

console.log(mySet)
