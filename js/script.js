
let backGroundImage = document.querySelector('.image-container');
// console.log(backGroundImage);

let searchBox = document.querySelector(".input-searchbox");

let searchIcon = document.querySelector(".btn");

let underSearchBox = document.querySelector(".under-Searchbox");


(function () {
    let number = Math.floor(Math.random()*34)+1 ;
    backGroundImage.style.backgroundImage = `url(/images/${number}.jpg)`
})()



const weatherDatabase = [
    { city : "Tehran" , tempreture : "9°C" , Humidity : '15%' , Weather : "Windy",  Windspeed : '7 km/h'} ,
    { city : "Esfahan" , tempreture : "12°C" , Humidity : '10%' , Weather : "Windy" , Windspeed : '15 km/h'} ,
    { city : "Shiraz" , tempreture : "15°C" , Humidity : '12%' , Weather : "Windy" , Windspeed : '5 km/h'} ,
    { city : "Tabriz" , tempreture : "20°C" , Humidity : '25%' , Weather : "Cloudy" , Windspeed : '20 km/h'} ,
    { city : "Zanjan" , tempreture : "4°C" , Humidity : '10%' , Weather : "Snowy" , Windspeed : '11 km/h'} ,
    { city : "Qazvin" , tempreture : "15°C" , Humidity : '8%' , Weather : "foggy" , Windspeed : '25 km/h'} ,
    { city : "Kish" , tempreture : "28°C" , Humidity : '35%' , Weather : "Rainy", Windspeed : '15 km/h'} ,
    { city : "Mashhad" , tempreture : "30°C" , Humidity : '14%' , Weather : "calm", Windspeed : '6 km/h'} ,
]

searchIcon.addEventListener("click",()=>{
    let data = searchBox.value ;
    let selectedCity = weatherDatabase.find((item)=>{
        return item.city===data
    })
    let htmlLines = ''
    htmlLines += `<div class="location">
    <p> Weather In ${selectedCity.city}</p>
</div>
<div class="degree">
    <p> ${selectedCity.tempreture}</p>
</div>
<div class="weather">
    <p> <span> <i class="fas fa-cloud-moon"></i> </span> ${selectedCity.Weather}</p>
</div>
<div class="details">
    <p>Humidity : ${selectedCity.Humidity} </p>
    <p>Wind speed : ${selectedCity.Windspeed}/h</p>
</div>` ;

underSearchBox.innerHTML = htmlLines ;
searchBox.value = '' ;



})






