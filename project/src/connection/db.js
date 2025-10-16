const mysql = require("mysql");
const connection = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "1111",
  database: "Capstone",
});

// mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "12341234",
//   database: "capstone",
// });

module.exports = connection;
