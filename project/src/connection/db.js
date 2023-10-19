const mysql = require("mysql");
const connection = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "12341234",
  database: "capstone",
});

// mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "12341234",
//   database: "capstone",
// });

module.exports = connection;
