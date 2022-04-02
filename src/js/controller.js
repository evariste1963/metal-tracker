import ApexCharts from 'apexcharts';
import * as model from './model.js';
import addStackView from './views/addStackView.js';
import spotDataView from './views/spotDataView.js';
import * as helpers from './helpers.js';

const btnUpdate = document.querySelector('.btn-update');
const candleChart = document.querySelector('#chart');
const modal = document.querySelectorAll('.modal');

var chart = new ApexCharts(candleChart, helpers.options);

chart.render();

const controlGetMetalPrice = async () => {
  const data = await model.getMetalPrice();
  markUp = await spotDataView._generateSpotMarkup(data);
  await spotDataView.renderData(markUp);

  
};

//-- All EventListeners --\\
modal.forEach(btn => btn.addEventListener('click', addStackView._toggleWindow)); ///maybe change btnUploadStack to submit to submit (remove modal class)

btnUpdate.addEventListener('click', controlGetMetalPrice);
