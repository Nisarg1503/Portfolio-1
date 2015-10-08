var express = require('express');
var router = express.Router();

/* Getting home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'This is my personal portfolio',
                        message: 'my Home page'} );
});

/* Getting about us page */
router.get('/about', function(req, res, next) {
   res.render('about'); 
});

/* Getting Skills page */
router.get('/skills', function(req, res, next) {
   res.render('skills'); 
});

/* Getting contact page */
router.get('/contact', function(req, res, next) {
   res.render('contact'); 
});
module.exports = router;
