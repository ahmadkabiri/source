
let btns = document.querySelectorAll(".btn");

let input = document.querySelector("input")

let h1Elem = document.querySelector("h1")

let pElem = document.querySelector("p")

let h1Flag = true ;

btns[2].addEventListener("click", ()=>{
    
    if(h1Flag){

        input.placeholder = "°C"
        h1Elem.innerHTML = "Converter °C to °F"
        input.value = '' ;
        h1Flag = !h1Flag
    }else{
        input.placeholder = "°F"
        h1Elem.innerHTML = "Converter °F to °C"
        input.value = '' ;
        h1Flag = !h1Flag
    }
})

btns[0].addEventListener("click",()=>{


    if(!isNaN(input.value) && input.value !== ""){
        if(!h1Flag){
            let celcius = input.value ;
            let fahrenheit = ((celcius*3.6)+32).toFixed(3) ;
            pElem.style.color = "rgb(70, 235, 128)"
            pElem.innerHTML = `${celcius}°C to ${fahrenheit}°F`;
        }else{
           let fahrenheit = input.value ;
            let celcius = ((fahrenheit-32)/1.8).toFixed(3) ;
            pElem.style.color = "rgb(70, 235, 128)"
            pElem.innerHTML = `${fahrenheit}°F to ${celcius}°C`;
        }
    }else if (input.value === ""){
        pElem.style.color= "rgb(169, 26, 26)"
        pElem.innerHTML = `Input is Empty`
    }else{
        pElem.innerHTML = `Wrong Input Entered`

    }

})

btns[1].addEventListener("click",()=>{
    pElem.innerHTML = "" ;
    input.value = '' ;

})