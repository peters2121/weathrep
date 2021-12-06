// fetch('https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=aee42e804382eda552bfe9d42fc8bba5')
function adigun(city){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&id=524901&appid=aee42e804382eda552bfe9d42fc8bba5`)
.then(res => res.json())
.then(res2 => {
    document.querySelector('.seyi').innerHTML = ''
    // console.log(res2)
    for(let i=0; i<res2.list.length; i++){
        // console.log(res2.list[i])
        document.querySelector('.seyi').innerHTML += `
                <div class="col-sm-4">
                <div class="city-card">
                    <div class="name">
                        <p class="m">${city}</p>
                    </div>
                    <h1 class="n"><i class="fa fa-sun"></i></h1>
                    <p class="k">WEATHER</p>  
                    <div class="lowerset">
                        <div class="set1">
                            <p><i class="fa fa-blog"></i> ${res2.list[i].dt_txt}</p>
                            <p><i class="fa fa-map"></i> ${res2.list[i].weather[0].description}</p>  
                        </div>
                        <h1> ${(res2.list[i].main.temp - 273).toFixed(2)}<sup>o</sup></h1>    
                    </div>
                </div>
            </div>
        `
    }
   
});
}
adigun('lagos');

function search(){
  let seat= document.querySelector('.seat').value
console.log(seat)
adigun(seat);

}