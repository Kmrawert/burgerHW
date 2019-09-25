var mysql = require("mysql");
var keys = require("./keys.js");


var connection = mysql.createConnection({
  host: "m7wltxurw8d2n21q.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "eu5bwemfwgbybc3f",
  password: "jro74wjtvg2wk6j5",
  database: "burgersDB"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
