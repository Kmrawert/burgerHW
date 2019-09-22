var connection = require("./connection.js");

function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    var value = ob[key];
  
    if (Object.hasOwnProperty.call(ob, key)) {
     
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

var orm = {
  selectAll: function(tableInput, callback) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) throw err;
      console.log(result);
      callback(result);
      //this is the same as data in controller.js file
    });
  },
  insertOne: function(table, cols, vals, callback) {
    //cols is all columns 
    var queryString = "INSERT INTO " + table;
    
    queryString += " (";
    queryString += cols.toString(); 
    queryString += ") ";
    queryString += "VALUES ("; 
    queryString += printQuestionMarks(vals.length); 
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },
  updateOne: function(table, columnValues, condition, callback) {
    var queryString = "UPDATE " + table;
    queryString += " SET ";
    queryString += objToSql(columnValues);
    queryString += " WHERE ";
    queryString += condition;
         //Should this function be converting the string to an integer for the boolean? 
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
 
      console.log(result);
      callback(result);
    });
  }
};

module.exports = orm;