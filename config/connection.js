// Sets up MySQL connection by requiring MySQL package.
var mysql = require("mysql");

// Sets up connection to database.
var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "mysql1995",
  database: "burgers_db"
});

// Connects to database.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  };
  console.log("connected as id " + connection.threadId);
});

// Exports connection for ORM to use.
module.exports = connection;