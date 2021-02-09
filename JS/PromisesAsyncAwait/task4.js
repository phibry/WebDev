// Get neighbor countries of Columbia

const fetchCountry = async (alpha3Code) => {
  try {
    const res = await fetch(
      `https://restcountries.eu/rest/v2/alpha/${alpha3Code}`
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchCountryAndNeighbor = async () => {
  // returns columbia
  const columbia = await fetchCountry('col');
  console.log(columbia);

  // returns the neighbors of columbia
  // is a list of promises
  // const neighbors = columbia.borders.map((border) => fetchCountry(border));

  // returns a list of ojects with the neighbor countries
  const neighbors = await Promise.all(
    columbia.borders.map((border) => fetchCountry(border))
  );

  console.log(neighbors);
};

fetchCountryAndNeighbor();
