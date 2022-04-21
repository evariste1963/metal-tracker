'use strict';

async function chartIt(csvurl) {
  const ctx = document.getElementById('spotChart').getContext('2d');
  Chart.defaults.font.size = 18;

  const data = await csvstuff(csvurl);

  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.xs,
      datasets: [
        {
          label: 'gold price',
          data: data.ys,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(20, 20, 200, 1)',
          borderWidth: 1,
          fill: true,
        },
      ],
    },
    options: {
      elements: {
        point: {
          radius: 0,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
chartIt('goldpricessince1978.csv');

async function csvstuff(urlcsv) {
  const xs = [];
  const ys = [];

  const response = await fetch(urlcsv);
  const data = await response.text();
  const table = data.split(/\r?\n/g).slice(1);
  //console.log(table);
  table.forEach(row => {
    const columns = row.split(',');
    const day = columns[0];
    xs.push(day);

    const price = row
      .substring(row.indexOf(',') + 1)
      .replaceAll('"', '')
      .replace(',', '');
    //console.log(day, price);
    ys.push(price);
  });
  console.log(xs, ys);
  return { xs, ys };
}
