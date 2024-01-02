const weathercon = document.querySelector("#weathercon");
const locations = document.querySelector("#locations");
const date  = document.querySelector("#date");
const temp = document.querySelector("#temp");
const btnSrc = document.querySelector("#btnSrc");
const srcLine = document.querySelector("#srcLine");

srcLine.addEventListener("keypress", event=>{
    if(event.key === "Enter"){
        event.preventDefault();
        btnSrc.click()
    }
})
btnSrc.addEventListener("click", function(){
    const cityName = srcLine.value;
    console.log(cityName);
    const names = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=35b1f1d45a7b4378cf2430ae601816be&units=metric`)
names.then(res =>{
    const promise = res.json();
    return promise
}).then(namez).catch(err=>{
    console.log(err);
})

})



const myPromise = fetch("https://api.openweathermap.org/data/2.5/weather?q=baku&APPID=35b1f1d45a7b4378cf2430ae601816be&units=metric")
myPromise.then(res =>{
    const promise = res.json();
    return promise
}).then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
});

const mains = fetch("https://api.openweathermap.org/data/2.5/weather?q=baku&APPID=35b1f1d45a7b4378cf2430ae601816be&units=metric")
mains.then(res =>{
    const promise = res.json();
    return promise
}).then(main).catch(err=>{
    console.log(err);
});
function main(data){
    const degre = data.main;
    console.log(degre);
    temp.innerHTML = degre.temp

    
    
}
const weathers = fetch("https://api.openweathermap.org/data/2.5/weather?q=baku&APPID=35b1f1d45a7b4378cf2430ae601816be&units=metric")
weathers.then(res =>{
    const promise = res.json();
    return promise
}).then(weather).catch(err=>{
    console.log(err);
});




function weather(data){
    const paqoda = data.weather;
    console.log(paqoda);
   


}



function namez(data){
    const name = data.name;
    locations.innerHTML = name
    console.log(name);
    
    
}