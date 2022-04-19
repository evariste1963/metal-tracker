'use strict';
async function chartIt(csvurl) {
  await csvstuff(csvurl);
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: xlabs,
      datasets: [
        {
          label: 'gold price',
          data: ylabs,
          backgroundColor: ['rgba(255, 99, 132, 0.2)'],
          borderColor: ['rgba(255, 99, 132, 1)'],
          borderWidth: 1,
          fill: true,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
chartIt('goldpricessince1978.csv');

const xlabs = [];
const ylabs = [];

async function csvstuff(urlcsv) {
  const response = await fetch(urlcsv);
  const data = await response.text();
  const table = data.split(/\r?\n/g).slice(1);
  table.forEach(row => {
    const columns = row.split(',');
    const day = columns[0];
    xlabs.push(day);
    const price = columns[1];
    ylabs.push(price);
  });
}
