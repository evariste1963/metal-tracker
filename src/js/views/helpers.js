export const getTimestamp = timestamp => {
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
