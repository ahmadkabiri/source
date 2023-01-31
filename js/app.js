


// window.addEventListener("load",()=>{
    
//     fetch('https://jsonplaceholder.typicode.com/posts')

//     .then(res => res.json())
//     .then(data => {
//         data.forEach(post => {
//             console.log(post)
//         });
//     })

// })

//


let url = 'https://jsonplaceholder.typicode.com/posts/'

let postID = 2



fetch(`${url}${postID}`)
.then(res => res.json())
.then(mainPost => console.log(mainPost))
