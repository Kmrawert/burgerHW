var orm = require("../config/orm.js");

//**EXAMPLE */
var burger = {
  all: function(cb) {
    orm.all("cats", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create("cats", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("cats", objColVals, condition, function(res) {
      cb(res);
    });
  }
};
//*EXAMPLE ABOVE/

module.exports = burger;
