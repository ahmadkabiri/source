
let books = [
    {id:1 , name:"think again ", price:95000},
    {id:2 , name:"shahname ", price:400000},
    {id:3 , name:"ego ", price:78000},
]

function addBooks (name,price,callback) {
    let newBook = {
        id:books.length+1 ,
        name,
        price
    }
    
    setTimeout(()=>{
        books.push(newBook);
        logBooks()
},4000)
}

function  logBooks () {
    console.log(books);  
}



addBooks("golestan",500000,logBooks)
