class Weather {
  constructor(city, country) {
    this.apiKey = '0b8baeffbfb6a3f6206e25b29d7cb66f';
    this.city = city;
    this.country = country;
  }

  // Fetch Weather from API
  // Async results in a promise
  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=metric&appid=${this.apiKey}`
    );
    const responseData = await response.json();
    return responseData;
  }

  // Change weather location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
