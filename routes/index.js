var express = require('express');
var router = express.Router();
var shimly = require('shimly');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Shimly', shims: [
      'Array.every', 
      'Array.filter', 
      'Array.forEach', 
      'Array.indexOf', 
      'Array.map', 
      'Array.some', 
      'Element.classList', 
      'Function.bind', 
      'Object.assign', 
      'JSON',
      'localStorage',
      'requestAnimationFrame',
      'EventListener',
      'Document.getElementsByClassName'
    ] });
});


/* POST returns shims. */
router.post('/shim', function(req, res, next) {
  var code = shimly(req.body.shims, req.body.minify);
  
  res.setHeader('content-type', 'text/javascript');
  res.setHeader('content-disposition', 'attachment; filename=shimly.js');
  res.end(code);
});

module.exports = router;
