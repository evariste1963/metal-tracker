import ApexCharts from 'apexcharts';
import * as model from './model.js';
import addStackView from './views/addStackView.js';
import spotDataView from './views/spotDataView.js';
import statisticDataView from './views/statisticDataView.js';
import accountUpdateView from './views/accUpdateView.js';
import * as helpers from './helpers.js';

const btnUpdate = document.querySelector('.btn-update');
const candleChart = document.querySelector('#chart');

///////////////////////////////////////////////////////////////////////
////===developement result --- TO BE DELETED---\\\
let markUp = spotDataView._generateSpotMarkup(helpers.devData);
spotDataView.renderData(markUp);
let accMarkUp = accountUpdateView._generateAccMarkup(helpers.devAccount);
accountUpdateView.renderData(accMarkUp);
//=======================================\\
/////////////////////////////////////////////////////////////////////////

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
    accountUpdateView.renderSpinner();
    //await account update;
    let markUp = await accountUpdateView._generateAccMarkup(
      await model.getAccountUpdate()
    );
    accountUpdateView.renderData(markUp);
  } catch (err) {
    console.error(err);
  }
}
const controlStackModal = function (e) {
  e.preventDefault();
  addStackView._toggleWindow();
  ///maybe change btnUploadStack to submit to submit (remove modal class)
};

//-- All EventListeners --\\

btnUpdate.addEventListener('click', async () => {
  await controlGetMetalPrice();
  setTimeout(controlGetAccountUpdate(), 6000);
});

//immediately pass controls to Views on startup (subscriber/publisher)
const init = function () {
  addStackView.addHandlerModal(controlStackModal);
};
init();
