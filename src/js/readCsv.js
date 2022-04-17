/*const csv = require('csv-parser');
const fs = require('fs');
const results = [];

fs.createReadStream('../docs/goldpricessince1978.csv')
  .pipe(csv([]))
  .on('data', data => results.push(data))
  .on('end', () => {
    console.log(results);
  });*/

export const csvData = function () {
  Papa.parse('../docs/goldpricessince1978.csv', {
    download: true,
    header: true,
    delimiter: ',',
    complete: function (results) {
      let array = results.data.map(Object.values);
      console.log(array);
      return array;
    },
  });
};
