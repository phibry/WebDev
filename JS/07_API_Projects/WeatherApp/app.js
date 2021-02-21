// Init Storage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();
console.log(weatherLocation);

// Init Weather
const weather = new Weather(weatherLocation.city, weatherLocation.countrycode);

// storage.setLocationData(weatherLocation.city, weatherLocation.countrycode);

// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const countrycode = document.getElementById('countrycode').value;

  // Change Location
  weather.changeLocation(city, countrycode);

  // Set Location in LS
  storage.setLocationData(city, countrycode);

  // Get and display Weather
  getWeather();

  // Close modal
  $('#locModal').modal('hide');
});

// returns a promise
// getWeather is asynchronous
function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}
