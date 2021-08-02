var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Shreya Patel' });
  
  });

router.get('/about', function(req, res, next) {
  res.render('about', { title: ' About | Shreya Patel' });
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: ' projects | Shreya Patel' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'contact | Shreya Patel' });
});


module.exports = router;
