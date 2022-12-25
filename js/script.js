
const list_items = [
  { id:1 , name: "Amin" , family:"Saeedi Rad"},
  { id:2 , name: "Amin" , family:"Darabi"},
  { id:3 , name: "Ali" , family:"Sangi"},
  { id:4 , name: "Hossain" , family:"Fallah"},
  { id:5 , name: "Abbas" , family:"Mohammadi"},

  { id:6 , name: "Saheb" , family:"Mohammadi"},
  { id:7 , name: "Ziba" , family:"Mahmoodi"},
  { id:8 , name: "Mohammad" , family:"Rajabi"},
  { id:9 , name: "Fateme" , family:"Rastan"},
  { id:10 , name: "Sohrab" , family:"Rostami"},

  { id:11 , name: "Ali" , family:"Nazari"},
  { id:12 , name: "Ramin" , family:"Mohammadian"},
  { id:13 , name: "Sara" , family:"Zahraie"},
  { id:14 , name: "Sima" , family:"Araste"},
  { id:15 , name: "Mahsa" , family:"Amini"},

  { id:16 , name: "Sardar" , family:"Azmoon"},
  { id:17 , name: "Ali" , family:"Zand Vakili"},
  { id:18 , name: "Rahman" , family:"Ahmadi"},
  { id:19 , name: "Mahdi" , family:"Mokhtari"},
  { id:20 , name: "Hamed" , family:"Ghorbani"},

  { id:21 , name: "Pouria" , family:"Gilani"},
  { id:22 , name: "hossein" , family:"Bahrami"},
]


const list_element = document.getElementById("list") ;

const pagination_element = document.getElementById("pagination") ;

let current_page = 1 ;
let rows = 3 ;
let pages ;

function displayPagination () {

  pages = Math.ceil(list_items.length/rows)
  makeButton(pages)
} ;

displayPagination()

function makeButton (pages) {
console.log(pages)

let btnElemArray = []

for(let i=1 ; i<=pages ;i++){
  let buttonElem = document.createElement("button");
  buttonElem.innerHTML = i ;
  buttonElem.setAttribute("id",i)
  btnElemArray.push(buttonElem)
  sliceArray(1)
  buttonElem.addEventListener("click",(event)=>{
    event.target.classList.add("active") ;
    let elemId = event.target.id
    sliceArray(elemId)
    btnElemArray.forEach(el=>{
      if(elemId!==el.id){
        el.classList.remove("active")
      }
    })
  })
  pagination_element.appendChild(buttonElem) ;
}
}

function sliceArray (id) {
  let idRow = id*rows ;
  let current_row = list_items.slice(idRow-(rows),idRow)
  makeRows(current_row) ;

}

function makeRows (row) {
  list_element.innerHTML="";
  row.forEach((el)=>{
    let itemDiv = document.createElement("div") ;
    itemDiv.classList.add("item") ;
    itemDiv.innerHTML = `${el.name} ${el.family}`
    list_element.append(itemDiv) ;
  })
}










