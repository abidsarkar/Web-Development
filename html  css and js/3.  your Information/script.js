
//ip information
const ipv4 = document.querySelector(".ipv4");
const ipCountry = document.querySelector(".ipCountry");
const ipRegion = document.querySelector(".ipRegion");
const ipCity = document.querySelector(".ipCity");
const ipTimeZone = document.querySelector(".ipTimeZone");
const ipCountryImage = document.querySelector(".ipCountryImage");
let ipUrl = "https://ipinfo.io?token=";

let ipToken = 'Your_TOKEN_ID';

document.addEventListener("DOMContentLoaded", function () {
  // Fetch the IP address from the API
  fetch(ipUrl+ `${ipToken}`)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      ipv4.textContent = data.ip;
      ipCountry.textContent = data.country;
      ipRegion.textContent = data.region;
      ipCity.textContent = data.city;
      ipTimeZone.textContent = data.timezone;
      ipCountryImage.src = `https://flagsapi.com/${ipCountry.textContent}/flat/64.png`;
      // Call the weather function after IP city is set
      if (data.city) {
        checkWeather(data.city);
      } else {
        console.error("City not found in IP data.");
      }
    })
    .catch((error) => {
      console.error("Error fetching IP address:", error);
    });
    
});
// loader
const logo = document.querySelector(".logo");
const ip = document.querySelector(".ip");
const loader = document.querySelector(".loader");
const locationMap = document.querySelector(".locationMap");
const time = document.querySelector(".time");
const weather = document.querySelector(".weather");
window.onload = function () {
  // Initially set display to 'none'
  logo.style.display = "none";
  ip.style.display = "none";
  time.style.display = "none";
  locationMap.style.display = "none";
  weather.style.display = "none";
  loader.style.display = "block";

  // After 1.5 seconds, set display to 'flex'
  setTimeout(() => {
    logo.style.display = "block";
    ip.style.display = "flex";
    time.style.display = "flex";
    locationMap.style.display = "flex";
    weather.style.display = "flex";
    loader.style.display = "none";
  }, 1500);
};
