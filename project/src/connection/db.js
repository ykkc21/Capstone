const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12341234",
  database: "capstone",
});

connection.connect();

module.exports = connection;
