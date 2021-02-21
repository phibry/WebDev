class Storage {
  constructor() {
    this.city;
    this.countrycode;
    this.defaultCity = 'Winterthur';
    this.defaultCountrycode = 'CH';
  }

  // If null, then use the defaults
  getLocationData() {
    if (localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }

    if (localStorage.getItem('countrycode') === null) {
      this.countrycode = this.defaultCountrycode;
    } else {
      this.countrycode = localStorage.getItem('countrycode');
    }

    return {
      city: this.city,
      countrycode: this.countrycode,
    };
  }

  setLocationData(city, countrycode) {
    localStorage.setItem('city', city);
    localStorage.setItem('countrycode', countrycode);
  }
}
