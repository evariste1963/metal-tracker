Papa.parse('goldpricessince1978.csv', {
  download: true,
  header: true,
  delimiter: ',',
  complete: function (results) {
    //console.log(results.data);
    let array = results.data.map(Object.values);

    console.log(array);
  },
});
