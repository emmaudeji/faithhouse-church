export const newDate = () => {
  let objectDate = new Date();

  let day = objectDate.getDate();

  let month = objectDate.getMonth() + 1;

  let year = objectDate.getFullYear();

  if (day < 10) {
    day = "0" + day;
  }

  if (month < 10) {
    month = `0${month}`;
  }

  let format1 = `${day}/${month}/${year}`;

  return format1;
};
