import {
  select,
  csv,
  scaleLinear,
  scaleTime,
  extent,
  axisLeft,
  axisBottom,
  line,
  curveBasis,
} from 'd3';

const svg = select('svg');

const width = +svg.attr('width');
const height = +svg.attr('height');

const render = (data) => {
  const title = 'Time Series';
};

//Read the data
d3.csv(
  'https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv'
).then((data) => {
  console.log(data);
  data.forEach((d) => {
    d.date = new Date(d.date);
    d.value = +d.value;
  });
  render(data);
});
