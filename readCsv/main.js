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

/*
[1327359600000, 30.95],
        [1327446000000, 31.34],
        [1327532400000, 31.18],
        [1327618800000, 31.05],
        [1327878000000, 31.0],
        [1327964400000, 30.95],
        */