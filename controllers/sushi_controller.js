var express = require("express");

var router = express.Router();

var sushi = require("../models/sushi.js");


router.get("/", function(req, res) {
  sushi.all(function(data) {
    var hbsObject = {
      sushi: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/sushi", function(req, res) {
  sushi.create([
    "name", "devoured"
  ], [
    req.body.name, req.body.devoured
  ], function(result) {

    res.json({ id: result.insertId });
  });
});

router.put("/api/sushi/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  sushi.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
