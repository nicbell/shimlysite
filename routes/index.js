var express = require('express');
var router = express.Router();
var shimly = require('shimly');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Shimly', shims: shimly.list() });
});


/* POST returns shims. */
router.post('/shim', function(req, res, next) {
  var code = shimly.shim(req.body.shims, req.body.minify);
  
  res.setHeader('content-type', 'text/javascript');
  res.setHeader('content-disposition', 'attachment; filename=shimly.js');
  res.end(code);
});

module.exports = router;
