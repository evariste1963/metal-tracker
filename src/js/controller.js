import ApexCharts from 'apexcharts';
import * as model from './views/addStackView.js';
import { API_KEY, API_URL } from './config.js';

// https://www.goldapi.io/dashboard
//https://www.goldapi.io/api/"XAU"/"GBP"/'20200101'
//const API_KEY = 'goldapi-15j9sm18l0w7rfer-io';
const metal = 'XAU';
const currency = 'GBP';
const historicDate = ''; //"20201112"; // 'yyyy/mm/dd'
const updateBtn = document.querySelector('.btn-update');
const candleChart = document.querySelector('#chart');
const spotTicker = document.querySelector('.spotTicker');

//build this below from api historic data/csv file
let candleData = [
  {
    x: new Date(1538778600000),
    y: [6629.81, 6650.5, 6623.04, 6633.33],
  },
  {
    x: new Date(1538780400000),
    y: [6632.01, 6643.59, 6620, 6630.11],
  },
  {
    x: new Date(1538782200000),
    y: [6630.71, 6648.95, 6623.34, 6635.65],
  },
  {
    x: new Date(1538784000000),
    y: [6635.65, 6651, 6629.67, 6638.24],
  },
  {
    x: new Date(1538785800000),
    y: [6638.24, 6640, 6620, 6624.47],
  },
  {
    x: new Date(1538787600000),
    y: [6624.53, 6636.03, 6621.68, 6624.31],
  },
  {
    x: new Date(1538789400000),
    y: [6624.61, 6632.2, 6617, 6626.02],
  },
  {
    x: new Date(1538791200000),
    y: [6627, 6627.62, 6584.22, 6603.02],
  },
  {
    x: new Date(1538793000000),
    y: [6605, 6608.03, 6598.95, 6604.01],
  },
  {
    x: new Date(1538794800000),
    y: [6604.5, 6614.4, 6602.26, 6608.02],
  },
  {
    x: new Date(1538796600000),
    y: [6608.02, 6610.68, 6601.99, 6608.91],
  },
  {
    x: new Date(1538798400000),
    y: [6608.91, 6618.99, 6608.01, 6612],
  },
  {
    x: new Date(1538800200000),
    y: [6612, 6615.13, 6605.09, 6612],
  },
  {
    x: new Date(1538802000000),
    y: [6612, 6624.12, 6608.43, 6622.95],
  },
  {
    x: new Date(1538803800000),
    y: [6623.91, 6623.91, 6615, 6615.67],
  },
  {
    x: new Date(1538805600000),
    y: [6618.69, 6618.74, 6610, 6610.4],
  },
  {
    x: new Date(1538807400000),
    y: [6611, 6622.78, 6610.4, 6614.9],
  },
  {
    x: new Date(1538809200000),
    y: [6614.9, 6626.2, 6613.33, 6623.45],
  },
  {
    x: new Date(1538811000000),
    y: [6623.48, 6627, 6618.38, 6620.35],
  },
  {
    x: new Date(1538812800000),
    y: [6619.43, 6620.35, 6610.05, 6615.53],
  },
  {
    x: new Date(1538814600000),
    y: [6615.53, 6617.93, 6610, 6615.19],
  },
  {
    x: new Date(1538816400000),
    y: [6615.19, 6621.6, 6608.2, 6620],
  },
  {
    x: new Date(1538818200000),
    y: [6619.54, 6625.17, 6614.15, 6620],
  },
  {
    x: new Date(1538820000000),
    y: [6620.33, 6634.15, 6617.24, 6624.61],
  },
  {
    x: new Date(1538821800000),
    y: [6625.95, 6626, 6611.66, 6617.58],
  },
  {
    x: new Date(1538823600000),
    y: [6619, 6625.97, 6595.27, 6598.86],
  },
  {
    x: new Date(1538825400000),
    y: [6598.86, 6598.88, 6570, 6587.16],
  },
  {
    x: new Date(1538827200000),
    y: [6588.86, 6600, 6580, 6593.4],
  },
  {
    x: new Date(1538829000000),
    y: [6593.99, 6598.89, 6585, 6587.81],
  },
  {
    x: new Date(1538830800000),
    y: [6587.81, 6592.73, 6567.14, 6578],
  },
  {
    x: new Date(1538832600000),
    y: [6578.35, 6581.72, 6567.39, 6579],
  },
  {
    x: new Date(1538834400000),
    y: [6579.38, 6580.92, 6566.77, 6575.96],
  },
  {
    x: new Date(1538836200000),
    y: [6575.96, 6589, 6571.77, 6588.92],
  },
  {
    x: new Date(1538838000000),
    y: [6588.92, 6594, 6577.55, 6589.22],
  },
  {
    x: new Date(1538839800000),
    y: [6589.3, 6598.89, 6589.1, 6596.08],
  },
  {
    x: new Date(1538841600000),
    y: [6597.5, 6600, 6588.39, 6596.25],
  },
  {
    x: new Date(1538843400000),
    y: [6598.03, 6600, 6588.73, 6595.97],
  },
  {
    x: new Date(1538845200000),
    y: [6595.97, 6602.01, 6588.17, 6602],
  },
  {
    x: new Date(1538847000000),
    y: [6602, 6607, 6596.51, 6599.95],
  },
  {
    x: new Date(1538848800000),
    y: [6600.63, 6601.21, 6590.39, 6591.02],
  },
  {
    x: new Date(1538850600000),
    y: [6591.02, 6603.08, 6591, 6591],
  },
  {
    x: new Date(1538852400000),
    y: [6591, 6601.32, 6585, 6592],
  },
  {
    x: new Date(1538854200000),
    y: [6593.13, 6596.01, 6590, 6593.34],
  },
  {
    x: new Date(1538856000000),
    y: [6593.34, 6604.76, 6582.63, 6593.86],
  },
  {
    x: new Date(1538857800000),
    y: [6593.86, 6604.28, 6586.57, 6600.01],
  },
  {
    x: new Date(1538859600000),
    y: [6601.81, 6603.21, 6592.78, 6596.25],
  },
  {
    x: new Date(1538861400000),
    y: [6596.25, 6604.2, 6590, 6602.99],
  },
  {
    x: new Date(1538863200000),
    y: [6602.99, 6606, 6584.99, 6587.81],
  },
  {
    x: new Date(1538865000000),
    y: [6587.81, 6595, 6583.27, 6591.96],
  },
  {
    x: new Date(1538866800000),
    y: [6591.97, 6596.07, 6585, 6588.39],
  },
  {
    x: new Date(1538868600000),
    y: [6587.6, 6598.21, 6587.6, 6594.27],
  },
  {
    x: new Date(1538870400000),
    y: [6596.44, 6601, 6590, 6596.55],
  },
  {
    x: new Date(1538872200000),
    y: [6598.91, 6605, 6596.61, 6600.02],
  },
  {
    x: new Date(1538874000000),
    y: [6600.55, 6605, 6589.14, 6593.01],
  },
  {
    x: new Date(1538875800000),
    y: [6593.15, 6605, 6592, 6603.06],
  },
  {
    x: new Date(1538877600000),
    y: [6603.07, 6604.5, 6599.09, 6603.89],
  },
  {
    x: new Date(1538879400000),
    y: [6604.44, 6604.44, 6600, 6603.5],
  },
  {
    x: new Date(1538881200000),
    y: [6603.5, 6603.99, 6597.5, 6603.86],
  },
  {
    x: new Date(1538883000000),
    y: [6603.85, 6605, 6600, 6604.07],
  },
  {
    x: new Date(1538884800000),
    y: [6604.98, 6606, 6604.07, 6606],
  },
];

//https://apexcharts.com/

var options = {
  series: [
    {
      name: 'line',
      type: 'line',
      data: [
        {
          x: new Date(1538778600000),
          y: 6604,
        },
        {
          x: new Date(1538782200000),
          y: 6602,
        },
        {
          x: new Date(1538814600000),
          y: 6607,
        },
        {
          x: new Date(1538884800000),
          y: 6620,
        },
      ],
    },
    {
      name: 'candle',
      type: 'candlestick',
      data: candleData,
    },
  ],
  chart: {
    height: '100%',
    width: '100%',
    type: 'line',
    fontFamily: 'Ink free, cursive, sans-serif',
    foreColor: '#000',
    dropShadow: {
      enabled: false,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: '#000',
      opacity: 0.35,
    },
    events: {
      animationEnd: undefined,
      beforeMount: undefined,
      mounted: undefined,
      updated: undefined,
      mouseMove: undefined,
      mouseLeave: undefined,
      click: undefined,
      legendClick: undefined,
      markerClick: undefined,
      selection: undefined,
      dataPointSelection: undefined,
      dataPointMouseEnter: undefined,
      dataPointMouseLeave: undefined,
      beforeZoom: undefined,
      beforeResetZoom: undefined,
      zoomed: undefined,
      scrolled: undefined,
      scrolled: undefined,
    },
    chart: {
      id: undefined,
    },
    animations: {
      enabled: true,
      easing: 'easeinout',
      speed: 800,
      animateGradually: {
        enabled: true,
        delay: 150,
      },
      dynamicAnimation: {
        enabled: true,
        speed: 350,
      },
    },
  },
  title: {
    text: 'Gold Daily Prices',
    align: 'left',
  },
  stroke: {
    width: [2, 1],
  },
  tooltip: {
    shared: true,
    custom: [
      function ({ seriesIndex, dataPointIndex, w }) {
        return w.globals.series[seriesIndex][dataPointIndex];
      },
      function ({ seriesIndex, dataPointIndex, w }) {
        var o = w.globals.seriesCandleO[seriesIndex][dataPointIndex];
        var h = w.globals.seriesCandleH[seriesIndex][dataPointIndex];
        var l = w.globals.seriesCandleL[seriesIndex][dataPointIndex];
        var c = w.globals.seriesCandleC[seriesIndex][dataPointIndex];
        return '';
      },
    ],
  },
  xaxis: {
    type: 'datetime',
  },
};

var chart = new ApexCharts(candleChart, options);

chart.render();

const myHeaders = new Headers();
myHeaders.append('x-access-token', API_KEY);
myHeaders.append('Content-Type', 'application/json');

const getTimestamp = timestamp => {
  let date = new Date(timestamp * 1000);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hours = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();

  let callDate = `${year}-${month.toString().padStart(2, 0)}-${day
    .toString()
    .padStart(2, 0)} ${hours.toString().padStart(2, 0)}:${mins
    .toString()
    .padStart(2, 0)}:${secs.toString().padStart(2, 0)}`;

  return callDate;
};

//spotTicker.innerHTML = `<H1><span>Latest Price</span><br><span id = spotPrice >£1430.05</span></H1>`;
//create an external function for this bit -- pass in result.values... return outcomes
let dateTime = result => {
  return getTimestamp(result.date ? result.timestamp / 1000 : result.timestamp);
};
//render data -- currently just consolelogging
const renderData = (result, callTime) => {
  //create an external function for this bit -- pass in result.values... return outcomes --- use 2nd box for other data (high/low etc)
  !result.date
    ? (spotTicker.innerHTML = `
    <H1 ><span>Latest Price</span><br>
    <div id= spotBox>
    <span id=spotPrice >£ ${result.price}</span>
    <div id=buy><span>BUY:  £${result.ask}</span></div>
    <div id=sell><span>SELL:  £${result.bid}</span></div>
    </div>
    </H1>`)
    : /* console.log(`
${callTime}
${result.metal}:-
BUY: ${result.ask}
SELL: ${result.bid}
Day low: ${result.low_price}
Day high: ${result.high_price}
Price: ${result.price}`)*/
      console.log(`
${callTime}
Previous closing price: ${result.prev_close_price}
Price: ${result.price}`);
};

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
};

const getMetalPrice = async () => {
  try {
    const response = await fetch(
      `${API_URL}/${metal}/${currency}/${historicDate}?`,
      requestOptions
    );
    const result = await response.json();
    console.log(result);

    renderData(result, dateTime(result));
  } catch (error) {
    console.log('error', error);
  }
};

updateBtn.addEventListener('click', getMetalPrice);

modalWindow = document.querySelector('.add-stack-window');
overlay = document.querySelector('.overlay');
btnOpen = document.querySelector('.btn-stack');
btnHide = document.querySelector('.btn--close-modal');
btnUploadStack = document.querySelector('.upload__btn');

const toggleWindow = e => {
  e.preventDefault();
  modalWindow.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};

btnOpen.addEventListener('click', toggleWindow);

btnHide.addEventListener('click', toggleWindow);

btnUploadStack.addEventListener('click', toggleWindow); ///change to submit

//goldAPI response
/*
{timestamp: 1647631965, metal: 'XAU', currency: 'GBP', exchange: 'FOREXCOM', symbol: 'FOREXCOM:XAUGBP', …}ask: 1457.17bid: 1456.4ch: -20.5chp: -1.39currency: "GBP"exchange: "FOREXCOM"high_price: 1478.16low_price: 1454.94metal: "XAU"open_price: 1477.28open_time: 1647561600prev_close_price: 1477.28price: 1456.78price_gram_18k: 35.1274price_gram_20k: 39.0305price_gram_21k: 40.982price_gram_22k: 42.9335price_gram_24k: 46.8366symbol: "FOREXCOM:XAUGBP"timestamp: 1647631965[[Prototype]]: Object

2022-03-18 19:32:45
XAU:-
Day low: 1454.94
Day high: 1478.16
Price: 1456.78
*/

//result from historic date:
/*
{date: '2020-11-12T10:30:00.000Z', timestamp: 1605177000000, metal: 'XAU', exchange: 'LBMA', currency: 'GBP', …}
ch: -6.2508
chp: -0.439
currency: "GBP"
date: "2020-11-12T10:30:00.000Z"
exchange: "LBMA"
metal: "XAU"
prev_close_price: 1430.2235
price: 1423.9727
price_gram_18k: 34.3363
price_gram_20k: 38.1515
price_gram_21k: 40.0591
price_gram_22k: 41.9666
price_gram_24k: 45.7818
timestamp: 1605177000000
*/

/*
const API_KEY = "b0ifc1x03it7x9ysdkymb90iea14322975t5ld01t0ap56iad6u1h37vuro3";
const gold = "XAU";
const updateBtn = document.querySelector(".btn-update");
const getMetalPrice = () => {
  fetch(
    `https://www.metals-api.com/api/latest?access_key=${API_KEY}&base=USD&symbols=${gold}`
  )
    .then(response => {
      return response.text();
    })
    .then(data => {
      console.log(data);
      const date = data.timestamp;
    });
};
updateBtn.addEventListener("click", getMetalPrice);
*/
