var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('promocion', { title: 'Estas son nuestras promociones' });
  });

module.exports = router;