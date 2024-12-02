const WeatherApiKey = "Your_API_KEY";//get your free api key from openWeatherMap

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let searchBtn = document.querySelector(".h24");
let weatherIcon = document.querySelector(".weatherIcon");
// let input = "Rangpur";
let input = document.querySelector(".ipCity");
async function checkWeather(city) {
  try {
    const response = await fetch(apiUrl + `${city}&appid=${WeatherApiKey}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    
    // console.log(data);
    document.querySelector(".city").textContent = data.name;
    document.querySelector(".temp").textContent = data.main.temp.toFixed(1) + `ºc`;
    document.querySelector(".humidity").textContent = data.main.humidity + `%`;
    document.querySelector(".wind").textContent = data.wind.speed + `Km/h`;
    let iconId = data.weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconId}@2x.png`;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert("Weather data not available for the city.");
  }
}

