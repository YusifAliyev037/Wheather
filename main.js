const card = document.querySelector("#card")

const myPromise = fetch("https://api.openweathermap.org/data/2.5/weather?q=baku&APPID=35b1f1d45a7b4378cf2430ae601816be&units=metric")
myPromise.then(res =>{
    const promise = res.json();
    return promise
}).then(promise=>{
    console.log(promise);
}).catch(err=>{
    console.log(err);
})



// function renderItem(data){
//     const paqoda = data.weather;
//     console.log(paqoda);


//     card.innerHTML = paqoda.map(item => `img src="${item.icon}" class="card-img-top" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">${item.main}</h5>
//       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//       <a href="#" class="btn btn-primary">Go somewhere</a>
//     </div>`)

// }
