let suggestions = [
    "Channel",
    "CodingLab",
    "CodingNepal",
    "YouTube",
    "YouTuber",
    "YouTube Channel",
    "Blogger",
    "Bollywood",
    "Vlogger",
    "Vechiles",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer",
    "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to become Freelancer",
    "How to become Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?",
];

let inputElem = document.querySelector("input")

let searchInputDiv = document.querySelector(".search-input")

let autoCompleteBox = document.querySelector(".autocom-box")

function getDataOfInput (event) {
    let inputValue = inputElem.value ;
    console.log(inputValue)
    filterItemsOfSuggestions(inputValue)
}

function filterItemsOfSuggestions (item) {
    
    let filteredItems = suggestions.filter(el=>{
        return el.toLowerCase().includes(item.toLowerCase())
    })

    if(filteredItems){
        makeLiElems(filteredItems)
    }else{
        searchInputDiv.className = ".autocom-box" ;
    }

}

function makeLiElems (filteredItems) {

    let newLiElems = '' ;
    searchInputDiv.classList.add("active") ;
    autoCompleteBox.innerHTML=''
    filteredItems.forEach(item=>{
        newLiElems +='<li onclick="clearLiList(event)">'+item+'</li>'
    })
    autoCompleteBox.innerHTML = newLiElems ;

}

function clearLiList (event) {
    inputElem.value = event.target.innerText ;
    searchInputDiv.className = "search-input" ;

}

inputElem.addEventListener("keyup",getDataOfInput)




