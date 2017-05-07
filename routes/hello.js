var express = require('express');
var router = express.Router(); // 1

router.get('/', function(req, res, next) { // 2
  res.render('hello', {
    msg: 'Hello World'
  });
});

module.exports = router; // 3
