//ip information
const ipv4 = document.querySelector(".ipv4");
const ipCountry = document.querySelector(".ipCountry");
const ipRegion = document.querySelector(".ipRegion");
const ipCity = document.querySelector(".ipCity");
const ipTimeZone = document.querySelector(".ipTimeZone");
const ipCountryImage = document.querySelector(".ipCountryImage");
let ipUrl = "https://ipinfo.io?token=";
let geoLoc;
let geoLatitude;
let geoLongitude;
let ipToken = "a6c4c7f1dc32fe";
// let ipToken = "your_api_key";

document.addEventListener("DOMContentLoaded", function () {
  // Fetch the IP address from the API
  fetch(ipUrl + `${ipToken}`)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      ipv4.textContent = data.ip;
      ipCountry.textContent = data.country;
      ipRegion.textContent = data.region;
      ipCity.textContent = data.city;
      ipTimeZone.textContent = data.timezone;
      ipCountryImage.src = `https://flagsapi.com/${ipCountry.textContent}/flat/64.png`;
      // call map to show map
      geoLoc = data.loc;
      // console.log(geoLoc);
      if (geoLoc) {
        let [geoLatitude, geoLongitude] = geoLoc.split(",").map(Number);
        // console.log("Latitude:", geoLatitude);
        // console.log("Longitude:", geoLongitude);
       getMap(geoLatitude, geoLongitude); // Call the getMap function
      }
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

// map function
let mapInstance;

function getMap(latitude, longitude) {

  const location = { lat: latitude, lng: longitude };
  
  // Check if map already exists and center hasn't changed (avoid unnecessary creation)
  if (mapInstance && mapInstance.getCenter().lat() === latitude && mapInstance.getCenter().lng() === longitude) {
    console.log("Using existing map instance");
    return mapInstance;
  }
  
  const mapDiv = document.getElementById('map');

  // Create a new map instance if needed
  mapInstance = new google.maps.Map(mapDiv, {
    zoom: 15,
    center: location,
  });

  // Create a marker using preferred constructor (consider AdvancedMarkerElement for advanced features)
  const marker = new google.maps.marker.AdvancedMarkerElement({
    position: location,
    map: map, // Reference to your map object
    // Other marker options
  });
 

  // Return the map instance for potential further interaction
  return mapInstance;
}
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
