

const $ = document ;

let inputWeightElem = $.getElementById("weight") ;

let inputHeightElem = $.getElementById("height");



let pHeightElem = $.querySelector(".height1") ;

let pWeightElem = $.querySelector(".weight1") ;

let pScoretElem = $.querySelector(".score") ;

let pDetailsElem = $.querySelector(".description") ;


let newHeight =125 ;
let newWeight = 75 ;

function heightHandler (event) {

    pHeightElem.innerHTML =  `${event.target.value}cm`

    newHeight = event.target.value ;
    
    bmiCalculator()
    showDetails()
}

console.log(newHeight)

function weightHandler (event) {

    pWeightElem.innerHTML = `${event.target.value}kg` ;

    newWeight = event.target.value ;


    bmiCalculator()

    showDetails()
    
}

let bmi ;

function bmiCalculator () {

    bmi = Math.ceil(10**4 *10* newWeight/(newHeight**2))/10
    console.log(bmi)

    pScoretElem.innerHTML = bmi ;


}



function showDetails () {

    if(bmi<18.5){
        pDetailsElem.innerHTML = `Underweight` ;
        pScoretElem.style.color = `#efbf6d`;

    }else if(bmi>=18.5 && bmi<24.5){
        pDetailsElem.innerHTML = `Normal Weight` ;
        pScoretElem.style.color = `#06d874`;

    }else if (bmi>=24.5 && bmi<29.9){
        pDetailsElem.innerHTML = `OverWeight` ;
        pScoretElem.style.color = `#ec823e`;
    }else{
        pDetailsElem.innerHTML = `Obese` ;
        pScoretElem.style.color = `#fa5057`;
    }

}





inputHeightElem.addEventListener("input",heightHandler)

inputWeightElem.addEventListener("input",weightHandler)
