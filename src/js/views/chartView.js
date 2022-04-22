import ApexCharts from 'apexcharts';
import { metal } from '../config.js';
import { histData } from '../histData.js';

let csvDataArray = [];

async function getcsv(csvUrl) {
  const response = await fetch(csvUrl);
  const data = await response.text();
  const table = data.split(/\r?\n/g).slice(1);
  csvDataArray.push(table);
}

var options = {
  series: [
    {
      name: metal,
      data: histData,
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
          text: '',
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
          text: '',
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
    min: new Date('01 Jan 2016').getTime(), //--USE ACTUAL DATA HERE
    tickAmount: 6,
  },
  tooltip: {
    x: {
      format: 'dd MMM yyyy',
    },
  },
  colors: ['rgba(7, 7, 128, 1)'],
  fill: {
    colors: ['rgba(7, 7, 128, 0.8)', '#000'],

    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.8,
      opacityTo: 0.9,
      stops: [0, 100],
    },
  },
};

export async function chartIt() {
  const chart = await new ApexCharts(document.querySelector('#chart'), options);
  chart.render();
}
