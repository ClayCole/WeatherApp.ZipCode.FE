let weather = {
    "apikey" : "9fa14f5b99ed3493987b421016a4fa91" ,
    fetchWeather: function (zipcode) {
        fetch("https://api.openweathermap.org/data/2.5/weather?zip="
         + zipcode 
         + "&units=imperial&appid=" 
         + this.apikey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed)
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = 
        "https://openweathermap.org/img/wn/" + icon  +"@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = Math.round(temp) + "\u00B0F";
        document.querySelector(".humidity").innerText = "humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + Math.round(speed) + " Mph ";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1600x900/?" + name +" ')"

    },
    search: function(zipcode) {
    
        this.fetchWeather(zipcode);
    }
}

//search bar working 

document.querySelector(".search-button")
.addEventListener("click", function () {
    let testzip = document.querySelector('#search-bar').value;
    weather.search(testzip);
});

// document.querySelector(".search-bar")
// .addEventListener("keyup", function(event) {
//     if (event.key == "Enter") {
//         weather.search();
//     }
// });

// weather.fetchWeather("");