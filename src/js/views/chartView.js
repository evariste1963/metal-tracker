import ApexCharts from 'apexcharts';
import { metal } from '../config.js';
//import { csvData } from '../readCsv.js';
//import csvfile from '../../docs/goldpricessince1978.csv';

//const _stockChart = document.querySelector('#chart');
//console.log('chartView: ', csvDataArray);

let csvDataArray = [];

async function getcsv(csvUrl) {
  const response = await fetch(csvUrl);
  const data = await response.text();
  const table = data.split(/\r?\n/g).slice(1);
  csvDataArray.push(table);
  console.log(table);

  /* Papa.parse('../../docs/goldpricessince1978.csv', {
    download: true,
    header: true,
    delimiter: ',',
    complete: function (results) {
      //console.log(results.data);
      //let array = results.data.map(Object.values);
      csvDataArray.push(results.data);
    },
  });*/
}
console.log('this chartView', csvDataArray);

var options = {
  series: [
    {
      name: metal,
      //csvDataArray,
      data: [
        [1451606400000, 719.2],
        [1451865600000, 736.8],
        [1451952000000, 735.2],
        [1452038400000, 747.1],
        [1452124800000, 759.4],
        [1452211200000, 757.9],
      ],
    },
  ],
  chart: {
    id: 'area-datetime',
    type: 'area',
    height: '100%',
    zoom: {
      autoScaleYaxis: true,
    },
  },
  annotations: {
    yaxis: [
      {
        y: 30,
        borderColor: '#999',
        label: {
          show: true,
          text: 'Support',
          style: {
            color: '#fff',
            background: '#00E396',
          },
        },
      },
    ],
    xaxis: [
      {
        x: new Date('01 Jan 2016').getTime(), /// USE ACTUAL DATA HERE
        borderColor: '#999',
        yAxisIndex: 0,
        label: {
          show: true,
          text: 'Rally',
          style: {
            color: '#fff',
            background: '#775DD0',
          },
        },
      },
    ],
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 0,
    style: 'hollow',
  },
  xaxis: {
    type: 'datetime',
    min: new Date('18 Apr 2022').getTime(), //--USE ACTUAL DATA HERE
    tickAmount: 6,
  },
  tooltip: {
    x: {
      format: 'dd MMM yyyy',
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 100],
    },
  },
};

export async function chartIt(csvUrl) {
  await getcsv(csvUrl);
  const chart = await new ApexCharts(document.querySelector('#chart'), options);
  //render chart
  chart.render();
}
chartIt('../../docs/goldpricessince1978.csv');
