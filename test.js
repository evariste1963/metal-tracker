const historicDate = "2020-01-01"; // 'yyyy/mm/dd'
function toTimestamp(strDate) {
  const datum = Date.parse(strDate);
  console.log("datum: " + datum);
  return datum / 1000;
}

const histDate = toTimestamp(historicDate);
console.log("histDate :" + histDate);
console.log("date from hist date: " + new Date(histDate * 1000));

const getTimestamp = (histDate) => {
  let date = new Date(histDate * 1000);
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
  console.log("callDate:", callDate);
  return callDate;
};
let dateTime = getTimestamp(histDate);
console.log("dateTime: " + dateTime);
