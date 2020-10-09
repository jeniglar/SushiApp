// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var sushi = {
  all: function(cb) {
    orm.all("sushi", function(res) {
      cb(res);
    });
  },

  create: function(cols, vals, cb) {
    orm.create("sushi", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("sushi", objColVals, condition, function(res) {
      cb(res);
    });
  },
  remove: function(val, cb) {
    orm.remove("sushi", "id", val, function(data) {
      cb(data);
    });
  }
};

module.exports = sushi;
