const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Finance', start: 1986, end: 1996 },
  { name: 'Company Eigth', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// -----------------------------------------------------------------------------
// ---------------------------------forEach-------------------------------------
// -----------------------------------------------------------------------------
// Standard
// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// Better way to loop through an array
companies.forEach((company) => {
  console.log(company);
});

// -----------------------------------------------------------------------------
// ---------------------------------filter--------------------------------------
// -----------------------------------------------------------------------------
// Filter a condition through an array
// we want all ages that are older than 21
// let canDrink = [];

// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }
// const canDrink = ages.filter((age) => {
//   return age >= 21
// });
const canDrink = ages.filter((age) => age >= 21);

// console.log(canDrink);

// Filter Retail Companies
const retailCompanies = companies.filter(
  (company) => company.category === 'Retail'
);

// console.log(retailCompanies);

// Filter Companier from the 80's
const eightiesCompanies = companies.filter((company) => company.start < 1990);
// console.log(eightiesCompanies);

// Comapnies that lasted atleast 10 years
const tenYears = companies.filter(
  (company) => company.end - company.start > 10
);
// console.log(tenYears);

// -----------------------------------------------------------------------------
// -----------------------------------map---------------------------------------
// -----------------------------------------------------------------------------
// Create array of company names
const companyNames = companies.map((company) => company.name);
// console.log(companyNames);

// Testmap
const testMap = companies.map((company) => {
  return `${company.name} [${company.start} - ${company.end}]`;
});
// console.log(testMap);

// Ages
const ageMap = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);
// console.log(ageMap);

// -----------------------------------------------------------------------------
// -----------------------------------sort--------------------------------------
// -----------------------------------------------------------------------------
// Sort Companies by the start year
// const sortedCompanies = companies.sort((c1, c2) => {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

const sortedCompanies = companies.sort((c1, c2) =>
  c1.start > c2.start ? 1 : -1
);

// console.log(sortedCompanies);

// Sort Ages
// Without passing in smth in the function, it will compare the first number
const sortedAges = ages.sort((a, b) => b - a);
// a - b -> Ascending
// b - a -> Descending
// console.log(sortedAges);

// -----------------------------------------------------------------------------
// ----------------------------------reduce-------------------------------------
// -----------------------------------------------------------------------------
// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

// Get total years for all companies
const totalYears = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);

// console.log(totalYears);

// -----------------------------------------------------------------------------
// -------------------------------Combinations----------------------------------
// -----------------------------------------------------------------------------
const combined = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combined);
