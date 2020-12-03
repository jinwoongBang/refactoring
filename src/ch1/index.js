const invoicesData = require("./invoices.json");
const playsData = require("./plays.json");
const { statement, htmlStatement } = require("./04_statement.js");

for (let invoice of invoicesData) {
  // console.log(statement(invoice, playsData));
  console.log(htmlStatement(invoice, playsData));
}
