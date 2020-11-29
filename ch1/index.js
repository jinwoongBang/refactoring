const invoicesData = require("./invoices.json");
const playsData = require("./plays.json");
const statement = require("./04_statement.js");

for (let invoice of invoicesData) {
  console.log(statement(invoice, playsData));
}
