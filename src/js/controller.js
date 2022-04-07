import ApexCharts from 'apexcharts';
import * as model from './model.js';
import addStackView from './views/addStackView.js';
import spotDataView from './views/spotDataView.js';
import statisticDataView from './views/statisticDataView.js';
import accUpdateView from './views/accUpdateView.js';
import * as helpers from './helpers.js';

const btnUpdate = document.querySelector('.btn-update');
const candleChart = document.querySelector('#chart');
const modal = document.querySelectorAll('.modal');

//get default chart
var chart = new ApexCharts(candleChart, helpers.options);
//render chart
chart.render();
//get metal price on 'get latest price' button
async function controlGetMetalPrice() {
  try {
    [spotDataView, statisticDataView].forEach(fn => fn.renderSpinner());
    let markUp = await spotDataView._generateSpotMarkup(
      await model.getMetalPrice()
    );
    //render price update
    spotDataView.renderData(markUp);
  } catch (err) {
    [spotDataView, statisticDataView].forEach(fn => fn.renderError());
  }
}

async function controlGetAccountUpdate() {
  try {
    accUpdateView.renderSpinner();
    //await account update;
    let markUp = await model.getAccountUpdate();
    accUpdateView.renderData(markUp);
  } catch (err) {
    console.error(err);
  }
}
//-- All EventListeners --\\
modal.forEach(btn => btn.addEventListener('click', addStackView._toggleWindow)); ///maybe change btnUploadStack to submit to submit (remove modal class)

btnUpdate.addEventListener('click', () => {
  controlGetMetalPrice();
  controlGetAccountUpdate();
});
