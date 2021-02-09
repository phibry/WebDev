// Using API
// Country: alpha3Code = col

const fetchData = async () => {
  // fetch returns a promise
  // We are using async, so instead of .then we use await
  const res = await fetch('https://restcountries.eu/rest/v2/alpha/col');

  const country = await res.json();

  console.log(country);
};

fetchData();
