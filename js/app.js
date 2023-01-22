

 
let users = [
    {
        id: 1,
        username:"amin",
        password:1010
    },
    {
        id: 2,
        username:"amir",
        password : 2323
    },
    {
        id: 3,
        username:"ali",
        password:1122,
        get() {
            console.log("lk")
        }
    },
]

console.log(JSON.stringify(users))











