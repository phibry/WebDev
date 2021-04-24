const csvUrl =
  'https://gist.githubusercontent.com/phibry/92ea033037a1e5470302a2978269bc05/raw/CSSNamedColors.csv';

d3.csv(csvUrl).then((data) => {
  let message = '';
  message += Math.round(d3.csvFormat(data).length / 1024) + ' kB\n';
  message += data.length + ' rows\n';
  message += data.columns.length + ' columns';
  document.getElementById('message-container').textContent = message;
  console.log(message);
  console.log(data);
});

// csvParse
// const fetchText = async (url) => {
//   const respone = await fetch(url);
//   return await respone.text();
// };

// fetchText(csvUrl).then((text) => {
//   const data = d3.csvParse(text);
//   let message = '';
//   message += Math.round(text.length / 1024) + ' kB\n';
//   message += data.length + ' rows\n';
//   message += data.columns.length + ' columns';
//   document.getElementById('message-container').textContent = message;
// });

// OLDSCHOOL
// fetch(url).then((response) => {
//   response.text().then((text) => {
//     console.log(text);
//   });
// });
