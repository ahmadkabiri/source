// sabzlearn code .............

// let fetchData = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Fetching Data Completed!") 
//             resolve({id:1 , message:"Fetching Data Completed"})
//         },2000);
//     })
// }


// const parseData = (data) =>{
//     return new Promise((resolve, reject) => {
//         let parsedOutput = `Parsed the data for id: ${data.id} and with message : ${data.message}`
//         setTimeout(() => {
            
//             console.log("Fake parse")
//             resolve({parsed:parsedOutput})
//         }, 2000);
//     })
// }



// const showData = (response)=>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let fakeData = dataBaseData
//             console.log(response.parsed)
//             console.log(response)
//             resolve(resolve)
//         }, 2000);
//     })
// }


// fetchData()
// .then(parseData)
// .then(showData)

/////////////////////////////////////////////////////////////

// my code.......


function fetchData () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.table([
                {id:1 , name:'Ali' , age : 15},
                {id:2 , name:'Reza' , age : 27},
                {id:3 , name:'Amir' , age : 25},
                {id:4 , name:'Shahin' , age : 29},
            ])
            resolve([
                {id:1 , name:'Ali' , age : 15},
                {id:2 , name:'Reza' , age : 27},
                {id:3 , name:'Amir' , age : 25},
                {id:4 , name:'Shahin' , age : 29},
            ])
        }, 1000);
    })
}

function makePhrases (arr) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let newIDs = []
            let newP = '' ;
            arr.forEach(user=>{
                 newP = ` ${user.name}'s id is : ${user.id} and he is ${user.age} years old` ;
                 newIDs.push(newP)
                 newP = '' ;
            })
            console.table(newIDs)
            resolve(newIDs);
        }, 1000);
    })
}

function showPhrases (phrase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            phrase.forEach(el=>{
                console.log(el);
                resolve()
            })
        }, 1000);
    })
}

fetchData()
.then(makePhrases)
.then(showPhrases)




