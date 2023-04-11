import { GoogleSpreadsheet } from "google-spreadsheet";

export const getData = async () => {
  let data = null;
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

    const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]

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
  } catch (error) {
    err = JSON.stringify(error);
  }

  return { data, err };
};

// export const getDataFaithhouse = async () => {
//   let data = "empty data";
//   let err = "no error report";
//   let event = "no event";

//   try {
//   } catch (error) {
//     err = JSON.stringify(error);
//   }

//   return { data, err, event };
// };
