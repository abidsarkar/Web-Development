//ip information
const ipv4 = document.querySelector('.ipv4');
const ipCountry = document.querySelector('.ipCountry');
const ipRegion = document.querySelector('.ipRegion');
const ipCity = document.querySelector('.ipCity');
const ipTimeZone = document.querySelector('.ipTimeZone');
const ipCountryImage = document.querySelector('.ipCountryImage');
document.addEventListener("DOMContentLoaded", function () {
    // Fetch the IP address from the API
    fetch("https://ipinfo.io?token=a6c4c7f1dc32fe")
      .then((response) => response.json())
      .then((data) => {
        // Display the IP address on the screen
        console.log(data);
        ipv4.textContent = data.ip;
        ipCountry.textContent = data.country;
        ipRegion.textContent = data.region;
        ipCity.textContent = data.city;
        ipTimeZone.textContent = data.timezone;
        ipCountryImage.src = `https://flagsapi.com/${ipCountry.textContent}/flat/64.png`;
        
      })
      .catch((error) => {
        console.error("Error fetching IP address:", error);
      });
  });