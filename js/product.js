// ✌ :))


let $ = document ;

let backBtn = $.querySelector("#back")
let shoeTitle = $.querySelector("h1")
let shoeDesc = $.querySelector("p")
let shoeImage = $.querySelector("img")

let productsArray = [
    {id:1 , title:"Sport Shoe" , price:53 , img :"images/1.png" },
    {id:2 , title:"Women Shoe" , price:81 , img :"images/2.png" },
    {id:3 , title:"Boots" , price:34 , img :"images/3.png" },

]

let locationParams = new URLSearchParams(location.search) ;
let mainProductID =  locationParams.get("id") ;

let mainProductObject =  productsArray.find(product=>{
    return product.id===Number(mainProductID)
})

console.log(mainProductObject)

if(mainProductObject){
    shoeTitle.innerHTML = mainProductObject.title ;
    shoeImage.setAttribute("src",mainProductObject.img) ;
}else{
    location.href = "http://127.0.0.1:5500/index.html"
}











backBtn.addEventListener("click",()=>{
    history.back() ;
})

