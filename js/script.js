

const bookList = [
    {year : "2022" ,author:"Daniel Kaneman", title :"Think Again"},
    {year : "2010" ,author:"Daren Hardy", title :"Asare Morakab"},
    {year : "2011" ,author:"khokhof", title :"Bartari Khafif"},
    {year : "2000" ,author:"Elvin Tafler", title :"Moj Chaharom"},
]



const $ = document ;

let titleInputElem = $.getElementById("title") ;

let authorInputElem = $.getElementById("author") ;

let yearInputElem = $.getElementById("year") ;

let btnAddBookElem = $.querySelector(".btn-block") ;

let bookListId = $.getElementById("book-list")

console.log(bookListId)

let list = {} ; 
console.log(titleInputElem.value)

function checkInputs (event) {
    event.preventDefault() ;

    if(yearInputElem.value && titleInputElem.value && authorInputElem ){
        list.author = authorInputElem.value ;
        list.year = yearInputElem.value ;
        list.title =titleInputElem.value ;

        authorInputElem.value='';
        yearInputElem.value='';
        titleInputElem.value='';

        bookList.push(list) ;
        localStorage.setItem("booklist",JSON.stringify(bookList));
        makeBookList(list);

    }

}

function makeBookList (list) {
    console.log(list)
    let newList =`<tr>
    <th>${list.title}</th>
    <th>${list.author}</th>
    <th>${list.year}</th>
  </tr>`

  bookListId.innerHTML += newList;


}





btnAddBookElem.addEventListener("click",checkInputs)



window.addEventListener("load",(event)=>{
    
    let localStorageBookList = JSON.parse(localStorage.getItem("booklist"))
    
    // console.log(event)
    localStorageBookList.forEach(el=>{
        makeBookList(el)
    })
})



localStorage.setItem("booklist",JSON.stringify(bookList));

