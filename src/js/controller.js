import ApexCharts from 'apexcharts';
import * as model from './model.js';
import { API_KEY, API_URL, metal, currency, historicDate } from './config.js';
import spotDataView from './views/spotDataView.js';
import addStackView from './views/addStackView.js';
import * as helpers from './views/helpers.js';

const btnUpdate = document.querySelector('.btn-update');
const candleChart = document.querySelector('#chart');
const modal = document.querySelectorAll('.modal');

//var options = helpers.options;

var chart = new ApexCharts(candleChart, helpers.options);

chart.render();

//-- All EventListeners --\\
modal.forEach(btn => btn.addEventListener('click', addStackView._toggleWindow)); ///maybe change btnUploadStack to submit to submit (remove modal class)

btnUpdate.addEventListener('click', model.getMetalPrice);
