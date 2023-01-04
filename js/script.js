﻿let allProducts = [
    {id : 1 , title : "Album 1" , price: 5 , img:"Images/Album 1.png" , count : 1 },
    {id : 2 , title : "Album 2" , price: 15 , img:"Images/Album 2.png" , count : 1 },
    {id : 3 , title : "Album 3" , price: 20 , img:"Images/Album 3.png" , count : 1 },
    {id : 4 , title : "Album 4" , price: 100 , img:"Images/Album 4.png" , count : 1},
    {id : 5 , title : "Coffee" , price: 5 , img:"Images/Cofee.png" , count : 1},
    {id : 6 , title : "Shirt" , price: 50 , img:"Images/Shirt.png" , count : 1},
]

let userBasket = [] ;



let $ = document ;

const shopItemContainer = $.querySelector(".shop-items")

const basketProductsContainer = $.querySelector(".cart-items")

const removeAllProductsBtn = $.getElementById("remove-all-products")

const cartTotalPriceElem = $.querySelector(".cart-total-price")



allProducts.forEach((product)=>{

    shopItemContainer.insertAdjacentHTML("beforeend",`<div class="shop-item"><span class="shop-item-title">${product.title}</span><img src=${product.img} class="shop-item-image"><div class="shop-item-details"><span class="shop-item-price,">${product.price}</span><button class="btn btn-primary shop-item-button" onclick='addProductToBasketArray(${product.id})'>ADD TO CART</button></div></div>`)



})

function addProductToBasketArray (productId) {
    
    let mainProduct = allProducts.find((product)=>{
        return product.id === productId
    })
    

    userBasket.push(mainProduct);

    basketProductsGenerator(userBasket)
    calcTotalPrice(userBasket);
}

function basketProductsGenerator (userBasketArray) {
    basketProductsContainer.innerHTML= ''
    userBasketArray.forEach((product)=>{
    
        let basketProductContainer = $.createElement("div") ;
        basketProductContainer.classList.add("cart-row") ;

        let basketProductDetailsContainer = $.createElement("div") ;
        basketProductDetailsContainer.className = "cart-item cart-column" ;

        let baskProductImg = $.createElement("img") ;
        baskProductImg.setAttribute("src",product.img) ;
        baskProductImg.setAttribute("width","100") ;
        baskProductImg.setAttribute("height","100") ;
        baskProductImg.classList.add("cart-item-image") ;

        let basketProductTitleSpan = $.createElement("span") ;
        basketProductTitleSpan.classList.add("cart-item-title") ;
        basketProductTitleSpan.innerHTML = product.title ;

        basketProductDetailsContainer.append(baskProductImg, basketProductTitleSpan)

        let basketProductPriceSpan = $.createElement("span") ;
        basketProductPriceSpan.className = "cart-price cart-column" ;
        basketProductPriceSpan.innerHTML = product.price ;

        let basketProductInputsContainer = $.createElement("div") ;
        basketProductInputsContainer.className = "cart-quantity cart-column";

        let basketProductInput = $.createElement("input") ;
        basketProductInput.className = "cart-quantity-input" ;
        basketProductInput.value = product.count ;
        basketProductInput.setAttribute("type","number") ;
        basketProductInput.setAttribute("min","0") ;
        basketProductInput.addEventListener("change",()=>{
            updateProductCount(product.id,basketProductInput.value)
        })

        let basketProductRemoveBtn = $.createElement("button") ;
        basketProductRemoveBtn.className = "btn btn-danger" ;
        basketProductRemoveBtn.innerHTML = "REMOVE" ;
        basketProductRemoveBtn.addEventListener("click",()=>{
            removeProductFromBasket(product.id)
        })

        basketProductInputsContainer.append(basketProductInput, basketProductRemoveBtn)

        basketProductContainer.append(basketProductDetailsContainer,basketProductPriceSpan,basketProductInputsContainer)

        basketProductsContainer.append(basketProductContainer)



    })
}


function removeProductFromBasket (productId) {

    userBasket =  userBasket.filter((product)=>{
        return product.id!== productId
    })
    basketProductsGenerator(userBasket) ;
    updateProductCount(productId,0)
    console.log(userBasket)
}


removeAllProductsBtn.addEventListener("click",()=>{
    userBasket = [] ;
    basketProductsGenerator(userBasket) ;
})


function calcTotalPrice (userBasketArray) {
    let totalPriceValue = 0 ;
    totalPriceValue = userBasketArray.reduce((acc,curr)=>{
        return acc + curr.count*curr.price ;
    },0)
    
    cartTotalPriceElem.innerHTML = totalPriceValue ;
}


function updateProductCount (productId,newCount) {
    console.log(`product ID : ${productId} new count : ${newCount}`) ;
    userBasket.forEach(product=>{
        if(product.id===productId){
            product.count = newCount ;
        }
    })

    calcTotalPrice(userBasket)
}






















