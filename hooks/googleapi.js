// Import dependencies
const { google } = require("googleapis");

const service = google.sheets("v4");

// Configure auth client
const authClient = new google.auth.JWT(
  process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  null,
  process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  ["https://www.googleapis.com/auth/spreadsheets"]
);

export const googleData = async () => {
  let data = "data";
  let err = "error";
  try {
    // Authorize the client
    const token = await authClient.authorize();

    // Set the client credentials
    authClient.setCredentials(token);

    // Get the rows
    const res = await service.spreadsheets.values.get({
      auth: authClient,
      spreadsheetId: "Your spreadsheet ID goes here",
      range: "A:Q",
    });

    // All of the answers
    const answers = [];

    // Set rows to equal the rows
    const rows = res.data.values;
    data = rows.length;

    // Check if we have any data and if we do add it to our answers array
    if (rows.length) {
      // Remove the headers
      rows.shift();
      // data = rows;

      // For each row
      for (const row of rows) {
        answers.push(row.Date);
        // data = JSON.stringify(answers);
      }
    } else {
      console.log("No data found.");
    }

    // Saved the answers
    // fs.writeFileSync(
    //   "answers.json",
    //   JSON.stringify(answers),
    //   function (err, file) {
    //     if (err) throw err;
    //     console.log("Saved!");
    //   }
    // );
  } catch (error) {
    // Log the error
    // err = JSON.stringify(error);
    console.log(error);

    // Exit the process with error
  }
  return {
    data,
    err,
  };
};
