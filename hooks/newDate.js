export const newDate = () => {
  let objectDate = new Date();

  let day = objectDate.getDate();

  let month = objectDate.getMonth();

  let year = objectDate.getFullYear();

  if (day < 10) {
    day = "0" + day;
  }

  if (month < 10) {
    month = `0${month}`;
  }

  let format1 = `${month}/${day}/${year}`;

  return format1;
};
