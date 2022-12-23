


// console.log(bookList) ;

const $ = document ;

let titleInputElem = $.getElementById("title") ;

let authorInputElem = $.getElementById("author") ;

let yearInputElem = $.getElementById("year") ;

let btnAddBookElem = $.querySelector(".btn-block") ;

let bookListId = $.getElementById("book-list")

let bookList = [
    {author:"ali" , year:2012 , title:"donkey are flying"}
] ;



let list = {} ; 

function checkInputs (event) {
    event.preventDefault() ;
    
    if(yearInputElem.value && titleInputElem.value && authorInputElem ){
        list.author = authorInputElem.value ;
        list.year = yearInputElem.value ;
        list.title =titleInputElem.value ;
        // list.id = bookList.length + 1

        authorInputElem.value='';
        yearInputElem.value='';
        titleInputElem.value='';

        bookList.push(list) ;
        console.log(list)

        localStorage.setItem("booklist",JSON.stringify(bookList));
        makeBookList(list);
        list = {}

    }

}

function makeBookList (list) {
    let newList =`<tr>
    <th>${list.title}</th>
    <th>${list.author}</th>
    <th>${list.year}</th>
  </tr>`

  bookListId.innerHTML += newList;


}





btnAddBookElem.addEventListener("click",checkInputs)



window.addEventListener("load",(event)=>{
    
    bookList = JSON.parse(localStorage.getItem("booklist"))
    
    // console.log(event)
    bookList.forEach(el=>{
        makeBookList(el)
    })
})



// localStorage.setItem("booklist",JSON.stringify(bookList));

