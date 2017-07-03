var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("To subscribe news letter go to: localhost:3000/newsletter");
});

module.exports = router;
