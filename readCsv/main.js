//npm install csv-parser
/// try papa-parse!!!!!!!!!!!!!!!!!


const csv = require('csv-parser');
const fs = require('fs');
const results = [];

fs.createReadStream('goldpricessince1978.csv')
  .pipe(csv({}))
  .on('data', data => results.push(data))
  .on('end', () => {
    console.log(results);
  });
