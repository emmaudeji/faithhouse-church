import { GoogleSpreadsheet } from "google-spreadsheet";

// var stringify = require("json-stringify-safe");

export const getData = async () => {
  let data = "empty data";
  let err = "no error report";

  try {
    // Initialize the sheet - doc ID is the long id in the sheets URL
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

    // Initialize Auth
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    });

    await doc.loadInfo(); // loads document properties and worksheets
    // console.log(doc.title);

    const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]

    // console.log(sheet.title);
    // console.log(sheet.rowCount);

    // adding / removing sheets
    // const newSheet = await doc.addSheet({ title: 'hot new sheet!' });
    // await newSheet.delete();

    // read rows
    const rows = await sheet.getRows(); // can pass in { limit, offset }

    // creat empty list to collect rows
    let answer = [];

    // add each row from rows to list
    rows.forEach((row) => {
      answer.push({
        Timestamp: row.Timestamp,
        date: row.Date,
        Series_topic: row.Series_topic,
        Todays_topic: row.Todays_topic,
        Category: row.Category,
        Scriptures: row.Scriptures,
        Prayers: row.Prayers,
        Read_and_think: row.Read_and_think,
        Scriptures_text: row.Scriptures_text,
        Invitation: row.Invitation,
        Power_word_for_today: row.Power_word_for_today,
        Author: row.Author,
        Scriptures: row.Scriptures,
      });
    });

    data = JSON.parse(JSON.stringify(answer));
    // data = rows[0].Date;

    // const sheet = await doc.addSheet({ headerValues: ["name", "email"] });
    // const larryRow = await sheet.addRow({
    //   name: "Larry Page",
    //   email: "larry@google.com",
    // });
    // const moreRows = await sheet.addRows([
    //   { name: "Sergey Brin", email: "sergey@google.com" },
    //   { name: "Eric Schmidt", email: "eric@google.com" },
    // ]);
    // const rows = await sheet.getRows();
    // console.log(rows[0].name);
  } catch (error) {
    err = JSON.stringify(error);
  }

  return { data, err };
};

// using sheets.best
// export const getDataFromSheet = async () => {
//   let data = "no data";
//   let err = "no error signal ";
//   try {
//     const res = await fetch(
//       `https://sheet.best/api/sheets/d0cbb106-1d12-4539-b49d-73f5f875059e`
//     );
//     if (res) {
//       data = await res.json();
//     }
//   } catch (err) {
//     err = err;
//     console.log(err);
//   }

// var circularObj = rows;
// circularObj.circularRef = circularObj;
// circularObj.list = [circularObj, circularObj];
// console.log(stringify(circularObj, null, 2));

//   return {
//     data: data,
//     err,
//   };
// };
